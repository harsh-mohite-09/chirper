import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';

import React from 'react';
import NewPost from '../components/UI/NewPost';
import Post from '../components/UI/Post';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { getSortedPosts, sortOptions } from '../utils/helpers';

const HomePage = () => {
  const { user: authUser } = useSelector(store => store.auth);
  const { allUsers } = useSelector(store => store.user);
  const { allPosts } = useSelector(store => store.posts);
  const [sortBy, setSortBy] = useState('Latest');

  const homePagePosts = allPosts.filter(
    post =>
      post.username === authUser.username ||
      allUsers
        ?.find(({ username }) => username === authUser.username)
        ?.following.some(({ username }) => username === post.username)
  );

  const sortedPosts = getSortedPosts(homePagePosts, sortBy);

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
          <Flex
            w="full"
            maxW="600px"
            py={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading size="md">{sortOptions[sortBy]}</Heading>
            <Menu maxW="8rem">
              <MenuButton as={Button}>
                <FontAwesomeIcon icon={faFilter} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setSortBy('Trending')}>
                  Trending
                </MenuItem>
                <MenuItem onClick={() => setSortBy('Latest')}>Latest</MenuItem>
                <MenuItem onClick={() => setSortBy('Oldest')}>Oldest</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {sortedPosts.map(post => (
            <Post post={post} key={post._id} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
