import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  Input,
  Button,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { signupUser } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(store => store.auth.token);
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userConfig, setUserConfig] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const inputHandler = (e, inputName) => {
    setUserConfig(prev => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const formSubmitHandler = async e => {
    e.preventDefault();
    dispatch(signupUser(userConfig));
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
            <Heading>Sign Up</Heading>
            <ColorModeSwitcher position="absolute" right="0" />
          </Flex>
          <Box my={4} textAlign="left">
            <form onSubmit={formSubmitHandler}>
              <Flex
                gap={{ base: 0, lg: 4 }}
                flexDir={{ base: 'column', lg: 'row' }}
              >
                <FormControl mt={4} isRequired>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    value={userConfig.firstName}
                    onChange={e => inputHandler(e, 'firstName')}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    value={userConfig.lastName}
                    onChange={e => inputHandler(e, 'lastName')}
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4} isRequired>
                <Input
                  type="text"
                  placeholder="Enter Email"
                  value={userConfig.email}
                  onChange={e => inputHandler(e, 'email')}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <Input
                  type="text"
                  placeholder="Enter username"
                  value={userConfig.username}
                  onChange={e => inputHandler(e, 'username')}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={userConfig.password}
                  onChange={e => inputHandler(e, 'password')}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  value={userConfig.confirmPassword}
                  onChange={e => inputHandler(e, 'confirmPassword')}
                />
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full" mt={4}>
                Sign Up
              </Button>

              <HStack justifyContent="center" mt={4}>
                <Box>
                  <ChakraLink
                    as={Link}
                    to="/login"
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    Already have an account? Log In
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

export default SignupPage;
