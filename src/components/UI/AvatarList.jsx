import React from 'react';
import { Avatar, Flex } from '@chakra-ui/react';
import { avatarList } from '../../asset/avatars/avatarList';

const AvatarList = ({ onAvatarSelect, onClose }) => {
  const handleAvatarSelect = e => {
    onAvatarSelect(e);
    onClose();
  };

  return (
    <Flex overflowY="auto" justifyContent="space-between" gap={1}>
      {avatarList.map((item, i) => (
        <Avatar
          size="sm"
          src={item}
          key={i}
          cursor="pointer"
          onClick={handleAvatarSelect}
        />
      ))}
    </Flex>
  );
};

export default AvatarList;
