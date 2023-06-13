import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import Post from '../components/UI/Post';
import LogoutUser from '../components/auth/LogoutUser';

const UserProfilePage = () => {
  return (
    <Flex p={2} flexDir="column" alignItems="center">
      <Flex mt={{ base: 0, lg: 4 }} p={2} w="full" maxW="600px">
        <Flex w="full" flexDir="column" gap={4}>
          <Flex gap={2} w="full">
            <Avatar name="Harsh Mohite" size="lg" />
            <Flex flexGrow={1}>
              <Flex justifyContent="space-between" w="full">
                <Flex flexDir="column" justifyContent="center">
                  <Heading size="md">Harsh Mohite</Heading>
                  <Text>@harshmohite09</Text>
                </Flex>
                <HStack>
                  <Button display={{ base: 'none', lg: 'block' }}>
                    Edit Profile
                  </Button>
                  <IconButton
                    display={{ base: 'block', lg: 'none' }}
                    icon={<FontAwesomeIcon icon={faPenToSquare} />}
                  />
                  <LogoutUser />
                </HStack>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            Aspiring Web Developer | neoG Camp 2023 | HTML - CSS - Javascript -
            ReactJS
          </Flex>
          <Flex>linktr.ee/harshm_09</Flex>
          <Divider />
          <Flex gap={5}>
            <Flex>5 Followers</Flex>
            <Flex>2 Following</Flex>
          </Flex>
        </Flex>
      </Flex>
      <Post isAuthUser />
      <Post isAuthUser />
      <Post isAuthUser />
      <Post isAuthUser />
    </Flex>
  );
};

export default UserProfilePage;
