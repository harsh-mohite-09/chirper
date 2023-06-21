import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../slices/postsSlice';

const ExplorePage = () => {
  const { allPosts, allPostsStatus } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const allExplorePosts = allPosts.filter(
    post => post.username !== authUser.username
  );

  return allPostsStatus === 'pending' ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
    <Box h="full" px={2}>
      <Box p={2}>
        <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
          Explore
        </Heading>
      </Box>
      <Divider />
      <Flex flexDir="column" alignItems="center" mt={4} pb={4}>
        {allExplorePosts.map(post => (
          <Post post={post} key={post._id} />
        ))}
      </Flex>
    </Box>
  );
};

export default ExplorePage;
