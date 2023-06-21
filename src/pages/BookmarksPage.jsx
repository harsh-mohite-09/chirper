import React from 'react';
import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBookmarks } from '../slices/postsSlice';

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
    <Box h="full" p={2}>
      <Box p={2}>
        <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
          Bookmarks
        </Heading>
      </Box>
      <Divider />
      <Flex flexDir="column" alignItems="center" pb={4}>
        {bookmarkedPosts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </Flex>
    </Box>
  );
};

export default BookmarksPage;
