import React from 'react';
import { Box, Button, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../slices/postsSlice';
import { Link } from 'react-router-dom';

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
    <Box h="full" px={2}>
      <Box p={2}>
        <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
          Liked Posts
        </Heading>
      </Box>
      <Divider />
      {likedPosts.length === 0 ? (
        <Flex flexDir="column" alignItems="center" gap={4}>
          <Heading fontSize="1.5rem" textAlign="center" mt={10}>
            No Posts Liked Yet
          </Heading>
          <Button as={Link} to="/explore" colorScheme="teal">
            Explore
          </Button>
        </Flex>
      ) : (
        <Flex flexDir="column" alignItems="center" mt={4} pb={4}>
          {likedPosts.map(post => (
            <Post key={post._id} post={post} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default LikedPage;
