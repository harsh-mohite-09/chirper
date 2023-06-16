import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import NewPost from '../components/UI/NewPost';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../slices/postsSlice';
const HomePage = () => {
  const { allPosts } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const homePagePosts = allPosts.filter(
    post =>
      post.username === authUser.username ||
      authUser.following.some(({ username }) => username === post.username)
  );

  return allPosts.length === 0 ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
    <>
      <Box h="full" p={2}>
        <Box p={2}>
          <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
            Home
          </Heading>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" pb={4}>
          <NewPost />
          {homePagePosts.map(post => (
            <Post post={post} key={post._id} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
