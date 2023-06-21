import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sortOptions } from '../../utils/helpers';
import React, { useRef } from 'react';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ sortBy, setSortBy }) => {
  const initialRef = useRef();
  return (
    <Flex
      w="full"
      maxW="600px"
      py={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading size="md" ml={2}>
        {sortOptions[sortBy]}
      </Heading>
      <Menu initialFocusRef={initialRef}>
        <MenuButton as={Button} variant="ghost" borderRadius="full">
          <FontAwesomeIcon icon={faSliders} size="lg" />
        </MenuButton>
        <MenuList minW="8rem">
          {Object.keys(sortOptions).map(currentSort => (
            <MenuItem
              key={currentSort}
              ref={sortBy === currentSort ? initialRef : null}
              onClick={() => setSortBy(currentSort)}
            >
              {currentSort}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Filter;
