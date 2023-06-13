import React from 'react';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Post from '../components/UI/Post';

const LikedPage = () => {
  return (
    <>
      <Box h="full" p={2}>
        <Box p={2}>
          <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
            Liked Posts
          </Heading>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" p={4}>
          <Post />
          <Post />
          <Post />
          <Post />
        </Flex>
      </Box>
    </>
  );
};

export default LikedPage;
