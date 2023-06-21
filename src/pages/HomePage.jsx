import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSortedPosts } from '../utils/helpers';
import { getAllPosts } from '../slices/postsSlice';
import Post from '../components/UI/Post';
import NewPost from '../components/UI/NewPost';
import Filter from '../components/UI/Filter';

const HomePage = () => {
  const [sortBy, setSortBy] = useState('Latest');
  const { user: authUser } = useSelector(store => store.auth);
  const { allUsers } = useSelector(store => store.user);
  const { allPosts, allPostsStatus } = useSelector(store => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const homePagePosts = allPosts.filter(
    post =>
      post.username === authUser.username ||
      allUsers
        ?.find(({ username }) => username === authUser.username)
        ?.following.some(({ username }) => username === post.username)
  );

  const sortedPosts = getSortedPosts(homePagePosts, sortBy);

  return allPostsStatus === 'pending' ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
    <Box h="full" px={2}>
      <Box p={2}>
        <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
          Home
        </Heading>
      </Box>
      <Divider />
      <Flex flexDir="column" alignItems="center" pb={4} gap={8}>
        <NewPost />
        {homePagePosts.length === 0 ? (
          <Heading fontSize="1.5rem" mt={5}>
            Start Posting & Following People
          </Heading>
        ) : (
          <Box>
            <Filter sortBy={sortBy} setSortBy={setSortBy} />
            {sortedPosts.map(post => (
              <Post post={post} key={post._id} />
            ))}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default HomePage;
