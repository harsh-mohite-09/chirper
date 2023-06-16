import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBarRight = () => {
  const { allUsers, allUsersStatus } = useSelector(store => store.user);
  const {
    user: { username: currentUser },
  } = useSelector(store => store.auth);

  const userList = allUsers.filter(({ username }) => username !== currentUser);

  const colorModeValue = useColorModeValue('#cbd5e0', '#319795');

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
      <Box borderWidth="1px" borderRadius="md" p="2">
        <Text fontSize="xl" fontWeight="bold" mb="4" ml="4">
          Suggested Users
        </Text>
        {allUsersStatus === 'pending' ? (
          <Flex justifyContent="center" mt={5}>
            <Spinner colorScheme="teal" size="lg" />
          </Flex>
        ) : (
          <Flex
            flexDir="column"
            gap="4"
            maxH="16rem"
            overflowY="scroll"
            p="2"
            css={{
              '&::-webkit-scrollbar': {
                width: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: colorModeValue,
                borderRadius: '2px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {userList.map(user => (
              <Flex key={user._id} align="center" mb="2">
                <Link to={`/profile/${user.username}`}>
                  <Avatar
                    mr="2"
                    src={user.avatarUrl}
                    name={`${user.firstName} ${user.lastName}`}
                  />
                </Link>

                <Link to={`/profile/${user.username}`}>
                  <Flex flexDir="column">
                    <Text size="lg" fontWeight={700}>
                      {`${user.firstName} ${user.lastName}`}
                    </Text>
                    <Text fontSize="sm">@{user.username}</Text>
                  </Flex>
                </Link>

                <Button ml="auto" colorScheme="teal" size="sm">
                  Follow
                </Button>
              </Flex>
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default SideBarRight;
