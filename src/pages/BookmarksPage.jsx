import React from 'react';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useSelector } from 'react-redux';

const BookmarksPage = () => {
  const { bookmarks } = useSelector(store => store.posts);
  const { allPosts } = useSelector(store => store.posts);

  const bookmarkedPosts = allPosts.filter(post =>
    bookmarks.some(id => id === post._id)
  );

  return (
    <>
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
    </>
  );
};

export default BookmarksPage;
