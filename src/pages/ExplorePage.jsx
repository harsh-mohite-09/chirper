import { Box, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';
import Post from '../components/UI/Post';
import { useSelector } from 'react-redux';

const ExplorePage = () => {
  const { allPosts } = useSelector(store => store.posts);
  const { user: authUser } = useSelector(store => store.auth);

  const allExplorePosts = allPosts.filter(
    post => post.username !== authUser.username
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
            Explore
          </Heading>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" pb={4}>
          {allExplorePosts.map(post => (
            <Post post={post} key={post._id} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ExplorePage;
