import { EditIcon } from '@chakra-ui/icons';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import { Button } from 'react-scroll';
import AvatarList from './AvatarList';

const AvatarPopover = ({ handleAvatarSelect }) => {
  return (
    <Popover placement="top">
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
          <AvatarList onAvatarSelect={handleAvatarSelect} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarPopover;
