import { Flex, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <Flex alignItems="center" pos="relative">
      <Input
        type="text"
        placeholder="Search users"
        size="md"
        borderRadius="full"
      />
      <IconButton
        aria-label="Search"
        icon={<FiSearch />}
        colorScheme="teal"
        size="sm"
        borderRadius="full"
        pos="absolute"
        right="4px"
      />
    </Flex>
  );
};

export default Searchbar;
