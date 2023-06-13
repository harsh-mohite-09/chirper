import React from 'react';
import {
  Button,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Avatar,
  Text,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import PostModal from '../UI/PostModal';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      h="full"
      p={4}
      flexDir={{ base: 'row', lg: 'column' }}
      borderRightWidth={{ base: '0', lg: '1px' }}
      borderTopWidth={{ base: '1px', lg: '0' }}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      justifyContent="space-between"
      position="relative"
    >
      <Flex
        flexDir={{ base: 'row', lg: 'column' }}
        gap={4}
        fontSize={{ base: '1.5em', lg: '1.2rem' }}
        alignItems={{ base: 'center', lg: 'stretch' }}
      >
        <ChakraLink
          as={NavLink}
          to="/"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
          _activeLink={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Home</Text>
          </Flex>
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/explore"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
          _activeLink={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.5 17.5L14 14l3.5-7.5L10 10l-3.5 7.5ZM12 13q-.425 0-.713-.288T11 12q0-.425.288-.713T12 11q.425 0 .713.288T13 12q0 .425-.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Explore</Text>
          </Flex>
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/bookmarks"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
          _activeLink={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
          order={{ base: 3, lg: 0 }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Bookmarks</Text>
          </Flex>
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/liked"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
          _activeLink={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
          order={{ base: 2, lg: 0 }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Liked Posts</Text>
          </Flex>
        </ChakraLink>

        <Button display={{ base: 'none', lg: 'block' }} onClick={onOpen}>
          <Text>Create Post</Text>
        </Button>

        <IconButton
          icon={<AddIcon />}
          display={{ base: 'block', lg: 'none' }}
          borderRadius="full"
          order={{ base: 1, lg: 0 }}
          onClick={onOpen}
        />
        <PostModal isOpen={isOpen} onClose={onClose} />
      </Flex>

      <Flex borderWidth="1px" borderRadius="full" mb={{ base: '0', lg: '4' }}>
        <ChakraLink
          w="full"
          as={Link}
          to={`/profile/${'user_id'}`}
          borderRadius="full"
          p={2}
          _activeLink={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
        >
          <Flex gap={4} alignItems="center">
            <Avatar name={`Harsh Mohite`} size={{ base: 'sm', lg: 'md' }} />
            <Flex flexDir="column" display={{ base: 'none', lg: 'block' }}>
              <Heading size="sm">Harsh Mohite</Heading>
              <Text fontSize="sm">@harshmohite09</Text>
            </Flex>
          </Flex>
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
