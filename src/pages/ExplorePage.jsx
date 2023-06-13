import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Post from '../components/UI/Post';

const ExplorePage = () => {
  return (
    <>
      <Box h="full" p={2}>
        <Box p={2}>
          <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
            Explore
          </Heading>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" pb={4}>
          <Post />
          <Post />
          <Post />
          <Post />
        </Flex>
      </Box>
    </>
  );
};

export default ExplorePage;
