import React from 'react';
import { Box, Button, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBookmarks } from '../slices/postsSlice';
import { Link } from 'react-router-dom';

const BookmarksPage = () => {
  const { allPosts, bookmarks, bookmarksStatus } = useSelector(
    store => store.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  const bookmarkedPosts = allPosts.filter(post =>
    bookmarks.some(id => id === post._id)
  );

  return bookmarksStatus === 'pending' ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
    <Box h="full" px={2}>
      <Box p={2}>
        <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
          Bookmarks
        </Heading>
      </Box>
      <Divider />
      {bookmarkedPosts.length === 0 ? (
        <Flex flexDir="column" alignItems="center" gap={4}>
          <Heading fontSize="1.5rem" textAlign="center" mt={10}>
            No Bookmarks Yet
          </Heading>
          <Button as={Link} to="/explore" colorScheme="teal">
            Explore
          </Button>
        </Flex>
      ) : (
        <Flex flexDir="column" alignItems="center" mt={4} pb={4}>
          {bookmarkedPosts.map(post => (
            <Post key={post._id} post={post} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default BookmarksPage;
