import { Box, Divider, Flex, Heading } from '@chakra-ui/react';

import React from 'react';
import NewPost from '../components/UI/NewPost';
import Post from '../components/UI/Post';
const HomePage = () => {
  return (
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
          <Post isAuthUser />
          <Post isAuthUser />
          <Post isAuthUser />
          <Post isAuthUser />
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
