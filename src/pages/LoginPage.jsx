import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useAuthContext } from '../context/authContext';
import { useDataContext } from '../context/dataContext';
import { loginUser } from '../services/authServices';

const testUserConfig = {
  username: 'harshmohite09',
  password: 'harsh123',
};

const LoginPage = () => {
  const { setToken, setUser } = useAuthContext();
  const { setLoader } = useDataContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [userConfig, setUserConfig] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (e, inputName) => {
    setUserConfig(prev => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    loginUser(setLoader, setToken, setUser, location, navigate, userConfig);
    setUserConfig({
      username: '',
      password: '',
    });
  };

  const guestLoginHandler = e => {
    e.preventDefault();
    loginUser(setLoader, setToken, setUser, location, navigate, testUserConfig);
    setUserConfig(testUserConfig);
  };

  return (
    <Flex
      minHeight="100dvh"
      width="full"
      align="center"
      justifyContent="center"
    >
      <Box
        borderWidth={1}
        px={4}
        width="90vw"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <Flex justifyContent="center" position="relative">
            <Heading>Log In</Heading>
            <ColorModeSwitcher position="absolute" right="0" />
          </Flex>
          <Box my={8} textAlign="left">
            <form onSubmit={formSubmitHandler}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={userConfig.username}
                  placeholder="Enter your username"
                  onChange={e => inputHandler(e, 'username')}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={userConfig.password}
                  placeholder="Enter your password"
                  onChange={e => inputHandler(e, 'password')}
                />
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full" mt={4}>
                Log In
              </Button>
              <Button width="full" mt={4} onClick={guestLoginHandler}>
                Guest Log In
              </Button>
              <HStack justifyContent="center" mt={4}>
                <Box>
                  <ChakraLink
                    as={Link}
                    to="/signup"
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    Create New Account
                  </ChakraLink>
                </Box>
              </HStack>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
