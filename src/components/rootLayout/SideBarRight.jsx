import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

import Searchbar from './Searchbar';

const suggestedUsers = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe23',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: 'janesmith45',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: 3,
    name: 'Jane Smith',
    username: 'janesmith45',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: 4,
    name: 'Jane Smith',
    username: 'janesmith45',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: 5,
    name: 'Jane Smith',
    username: 'janesmith45',
    avatar: 'https://example.com/avatar1.png',
  },
  // Add more user data as needed
];

const SideBarRight = () => {
  return (
    <Flex
      borderLeft="1px"
      display={{ base: 'none', lg: 'flex' }}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      h="full"
      w="20rem"
      flexDir="column"
      gap={4}
      fontSize="1.2rem"
      p={2}
      pr={4}
    >
      <Searchbar />

      <Box borderWidth="1px" borderRadius="md" p="2">
        <Text fontSize="xl" fontWeight="bold" mb="4" ml="4">
          Suggested Users
        </Text>
        <Flex
          flexDir="column"
          gap="4"
          maxH="16rem"
          overflowY="scroll"
          p="2"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: useColorModeValue('#cbd5e0', '#319795'),
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {suggestedUsers.map(user => (
            <Flex key={user.id} align="center" mb="2">
              <Avatar src={user.avatar} mr="2" name={user.name} />

              <Flex flexDir="column">
                <Text size="lg" fontWeight={700}>
                  {user.name}
                </Text>
                <Text fontSize="sm">@{user.username}</Text>
              </Flex>

              <Button ml="auto" colorScheme="teal" size="sm">
                Follow
              </Button>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default SideBarRight;
