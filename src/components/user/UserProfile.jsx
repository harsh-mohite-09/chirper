import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LogoutUser from '../auth/LogoutUser';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileModal from './EditProfileModal';
import { followUser, unfollowUser } from '../../slices/userSlice';

const UserProfile = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    user: { username: currentUser },
  } = useSelector(store => store.auth);
  const { allUsers } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const authUser = allUsers.find(({ username }) => username === currentUser);

  const isAuthUser = authUser?.username === user?.username;

  const isFollowed = authUser?.following.some(
    ({ username }) => username === user.username
  );

  const followHandler = () => {
    if (isFollowed) {
      dispatch(unfollowUser(user._id));
    } else {
      dispatch(followUser(user._id));
    }
  };

  return (
    <Flex mt={{ base: 0, lg: 4 }} p={2} w="full" maxW="600px">
      <Flex w="full" flexDir="column" gap={4}>
        <Flex gap={2} w="full">
          <Avatar
            src={user?.avatarUrl}
            name={`${user?.firstName} ${user?.lastName}`}
            size="lg"
          />
          <Flex flexGrow={1}>
            <Flex justifyContent="space-between" w="full">
              <Flex flexDir="column" justifyContent="center">
                <Heading size="md">{`${user?.firstName} ${user?.lastName}`}</Heading>
                <Text>@{user?.username}</Text>
              </Flex>
              {isAuthUser ? (
                <HStack>
                  <Button
                    display={{ base: 'none', lg: 'block' }}
                    onClick={onOpen}
                  >
                    Edit Profile
                  </Button>
                  <EditProfileModal
                    isOpen={isOpen}
                    onClose={onClose}
                    user={authUser}
                  />
                  <IconButton
                    display={{ base: 'block', lg: 'none' }}
                    icon={<FontAwesomeIcon icon={faPenToSquare} />}
                    onClick={onOpen}
                  />
                  <LogoutUser />
                </HStack>
              ) : (
                <HStack>
                  <Button
                    onClick={followHandler}
                    colorScheme={isFollowed ? 'red' : 'teal'}
                  >
                    {isFollowed ? 'Unfollow' : 'Follow'}
                  </Button>
                </HStack>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex>{user?.bio}</Flex>
        <Flex>
          <Link href={user.website} target="_blank">
            {user?.website}
          </Link>
        </Flex>
        <Divider />
        <Flex gap={5}>
          <Flex>{user?.followers?.length} Followers</Flex>
          <Flex>{user?.following?.length} Following</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;