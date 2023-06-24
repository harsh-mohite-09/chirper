import { Flex, Heading, Spinner } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import Post from '../components/UI/Post';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../slices/userSlice';
import UserProfile from '../components/user/UserProfile';
import { getSortedPosts } from '../utils/helpers';

const UserProfilePage = () => {
  const { username } = useParams('username');
  const { allUsers, allUsersStatus } = useSelector(store => store.user);
  const { allPosts } = useSelector(store => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [username, dispatch]);

  const userPosts = allPosts.filter(post => post.username === username);
  const user = allUsers.find(user => user.username === username);

  const sortedLatestUserPosts = getSortedPosts(userPosts, 'Latest');

  return allUsersStatus === 'pending' || allUsersStatus === 'idle' ? (
    <Flex justifyContent="center" mt={5}>
      <Spinner colorScheme="teal" size="xl" />
    </Flex>
  ) : (
    <Flex p={2} flexDir="column" alignItems="center">
      <UserProfile user={user} />
      {userPosts.length === 0 ? (
        <Heading fontSize="1.5rem" mt={5}>
          No Posts Yet
        </Heading>
      ) : (
        <>
          {sortedLatestUserPosts?.map(post => (
            <Post post={post} key={post._id} />
          ))}
        </>
      )}
    </Flex>
  );
};

export default UserProfilePage;
