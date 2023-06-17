import { Avatar, Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { followUser } from '../../slices/userSlice';

const SideBarUser = ({ user }) => {
  const dispatch = useDispatch();

  const followHandler = () => {
    dispatch(followUser(user._id));
  };

  return (
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

      <Button ml="auto" colorScheme="teal" size="sm" onClick={followHandler}>
        Follow
      </Button>
    </Flex>
  );
};

export default SideBarUser;
