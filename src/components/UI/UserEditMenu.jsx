import { EditIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { faPen, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AvatarList from './AvatarList';
import { useRef } from 'react';

const UserEditMenu = ({ handleAvatarSelect, handleImageSelect }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const fileInputRef = useRef(null);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FontAwesomeIcon icon={faPen} />}
        variant="ghost"
        borderRadius="full"
      />
      <MenuList minW="8rem">
        <Popover
          placement="bottom"
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              leftIcon={<EditIcon />}
              onClick={e => e.stopPropagation()}
              variant="ghost"
              p={3}
            >
              Choose Avatar
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Choose</PopoverHeader>
            <PopoverBody>
              <AvatarList
                onAvatarSelect={handleAvatarSelect}
                onClose={onClose}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <MenuItem
          icon={<FontAwesomeIcon icon={faUpload} />}
          onClick={() => fileInputRef.current.click()}
        >
          <FormControl>
            <FormLabel m={0}>Upload</FormLabel>
            <Input
              ref={fileInputRef}
              type="file"
              display="none"
              accept="image/*"
              onChange={handleImageSelect}
            />
          </FormControl>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserEditMenu;
