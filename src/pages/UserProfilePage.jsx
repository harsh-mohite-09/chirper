import { Flex, Spinner } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import Post from '../components/UI/Post';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../slices/userSlice';
import { getUserPosts } from '../slices/postsSlice';
import UserProfile from '../components/user/UserProfile';

const UserProfilePage = () => {
  const { username } = useParams('username');
  const { userDetails: user, userDetailsStatus } = useSelector(
    store => store.user
  );
  const { allPosts, userPosts } = useSelector(store => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username));
    dispatch(getUserPosts(username));
  }, [username, allPosts, dispatch]);

  return userDetailsStatus === 'pending' ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
    <Flex p={2} flexDir="column" alignItems="center">
      <UserProfile user={user} />
      {userPosts?.map(post => (
        <Post user={user} post={post} key={post._id} />
      ))}
    </Flex>
  );
};

export default UserProfilePage;
