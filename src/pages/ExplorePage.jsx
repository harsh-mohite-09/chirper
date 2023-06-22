import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Post from '../components/UI/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../slices/postsSlice';
import { getSortedPosts } from '../utils/helpers';
import Filter from '../components/UI/Filter';
import { useState } from 'react';

const ExplorePage = () => {
  const [sortBy, setSortBy] = useState('Latest');
  const { allPosts, allPostsStatus } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const allExplorePosts = allPosts.filter(
    post => post.username !== authUser.username
  );

  const sortedExplorePosts = getSortedPosts(allExplorePosts, sortBy);

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
      <Flex flexDir="column" alignItems="center" pb={4}>
        <Filter sortBy={sortBy} setSortBy={setSortBy} />
        {sortedExplorePosts.map(post => (
          <Post post={post} key={post._id} />
        ))}
      </Flex>
    </Box>
  );
};

export default ExplorePage;
