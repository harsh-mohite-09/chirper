import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Box,
  Flex,
  HStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import Searchbar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      gap="1rem"
      alignItems={'center'}
      px={{ base: 2, lg: 4 }}
      py={2}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <HStack spacing={4} ml={2}>
        <FontAwesomeIcon icon={faDove} size="xl" />
        <Heading fontSize={'1.5rem'} display={{ base: 'none', lg: 'block' }}>
          Chirper
        </Heading>
      </HStack>

      <Searchbar />

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Header;
