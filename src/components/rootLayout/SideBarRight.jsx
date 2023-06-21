import React from 'react';
import { Box, Flex, Text, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import SideBarUser from './SideBarUser';

const SideBarRight = () => {
  const { allUsers, allUsersStatus } = useSelector(store => store.user);
  const {
    user: { username: currentUser },
  } = useSelector(store => store.auth);

  const authUser = allUsers?.find(({ username }) => username === currentUser);

  const userList = allUsers?.filter(
    ({ username }) =>
      username !== authUser?.username &&
      !authUser?.following.some(item => item.username === username)
  );

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
        {allUsersStatus === 'idle' ? (
          <Flex justifyContent="center" mt={5}>
            <Spinner colorScheme="teal" size="lg" />
          </Flex>
        ) : (
          <Flex flexDir="column" gap="4" maxH="16rem" overflowY="scroll" p="2">
            {userList.map(user => (
              <SideBarUser key={user._id} user={user} />
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default SideBarRight;
