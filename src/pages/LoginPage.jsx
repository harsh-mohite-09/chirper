import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useRef } from 'react';

const testUserConfig = {
  username: 'harshmohite09',
  password: 'harsh123',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector(store => store.auth.loading);
  const btn = useRef('');

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

  const formSubmitHandler = async e => {
    e.preventDefault();
    btn.current = 'login';
    await dispatch(loginUser(userConfig));
    navigate('/');
    setUserConfig({
      username: '',
      password: '',
    });
  };

  const guestLoginHandler = async e => {
    e.preventDefault();
    btn.current = 'guest';
    await dispatch(loginUser(testUserConfig));
    navigate('/');
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
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={userConfig.password}
                    placeholder="Enter your password"
                    onChange={e => inputHandler(e, 'password')}
                  />
                  <InputRightElement>
                    <IconButton
                      icon={
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          color="#718096"
                        />
                      }
                      variant="ghost"
                      _hover={{ bg: 'transparent' }}
                      onClick={() => setShowPassword(prev => !prev)}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                width="full"
                mt={4}
                isLoading={loading && btn.current === 'login'}
              >
                Log In
              </Button>
              <Button
                width="full"
                isLoading={loading && btn.current === 'guest'}
                mt={4}
                onClick={guestLoginHandler}
              >
                Guest Log In
              </Button>
              <HStack justifyContent="center" mt={4}>
                <Box>
                  <ChakraLink
                    as={Link}
                    to="/signup"
                    _hover={{ textDecoration: 'none' }}
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
