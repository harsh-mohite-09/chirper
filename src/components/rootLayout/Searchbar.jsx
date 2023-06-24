import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { getSearchSuggestions } from '../../utils/helpers';
import { CloseIcon } from '@chakra-ui/icons';
import SideBarUser from './SideBarUser';

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');
  const { allUsers } = useSelector(store => store.user);
  const {
    user: { username: currentUser },
  } = useSelector(store => store.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialFocusRef = useRef(null);

  const authUser = allUsers?.find(({ username }) => username === currentUser);

  const userList = allUsers?.filter(
    ({ username }) => username !== authUser?.username
  );

  const searchSuggestionList = getSearchSuggestions(userList, searchText);

  return (
    <Popover
      placement="bottom"
      initialFocusRef={initialFocusRef}
      isOpen={isOpen && searchText.trim().length > 0}
    >
      <PopoverTrigger>
        <Flex alignItems="center" flexBasis="20rem">
          <InputGroup>
            <Input
              ref={initialFocusRef}
              type="text"
              placeholder="Search users"
              size="md"
              borderRadius="full"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              onBlur={onClose}
              onFocus={onOpen}
            />
            <InputRightElement
              pointerEvents={searchText.trim().length > 0 ? 'auto' : 'none'}
            >
              {searchText.trim().length > 0 ? (
                <IconButton
                  icon={<CloseIcon />}
                  borderRadius="full"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchText('')}
                />
              ) : (
                <FiSearch />
              )}
            </InputRightElement>
          </InputGroup>
        </Flex>
      </PopoverTrigger>
      <PopoverContent maxW={{ base: '15rem', lg: '20rem' }}>
        <PopoverArrow />
        <PopoverBody>
          <Flex flexDir="column" gap="4" maxH="16rem" overflowY="scroll" p="2">
            {searchSuggestionList.map(user => (
              <SideBarUser key={user._id} user={user} isSearchUser />
            ))}
            {searchSuggestionList.length === 0 && <Text>No Users Found</Text>}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Searchbar;
