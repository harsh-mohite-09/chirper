import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../slices/authSlice';

const ErrorPage = () => {
  const dispatch = useDispatch();

  const refreshHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <Flex flexDir="column" p={8} mt={8} gap={8} alignItems="center">
      <Heading textAlign="center">Something went wrong!</Heading>
      <Button onClick={refreshHandler} colorScheme="teal">
        Refresh
      </Button>
    </Flex>
  );
};

export default ErrorPage;
