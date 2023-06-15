import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <Flex alignItems="center" flexBasis="20rem">
      <InputGroup>
        <Input
          type="text"
          placeholder="Search users"
          size="md"
          borderRadius="full"
        />
        <InputRightElement pointerEvents="none">
          <FiSearch />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Searchbar;
