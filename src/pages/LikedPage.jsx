import React from 'react';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useSelector } from 'react-redux';

const LikedPage = () => {
  const { allPosts } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);

  const likedPosts = allPosts.filter(post =>
    post.likes.likedBy.some(id => id === authUser._id)
  );

  return (
    <>
      <Box h="full" p={2}>
        <Box p={2}>
          <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
            Liked Posts
          </Heading>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" pb={4}>
          {likedPosts.map(post => (
            <Post key={post._id} post={post} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default LikedPage;
