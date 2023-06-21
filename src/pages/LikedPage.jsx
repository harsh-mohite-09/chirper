import React from 'react';
import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../slices/postsSlice';

const LikedPage = () => {
  const { allPosts, allPostsStatus } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const likedPosts = allPosts.filter(post =>
    post.likes.likedBy.some(id => id === authUser._id)
  );

  return allPostsStatus === 'pending' ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
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
  );
};

export default LikedPage;
