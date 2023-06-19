import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserDetails } from '../../slices/authSlice';
import UserEditMenu from '../UI/UserEditMenu';

const EditProfileModal = ({ isOpen, onClose, user }) => {
  const [userDetails, setUserDetails] = useState(user);
  const dispatch = useDispatch();
  const submitProfileEdit = async e => {
    e.preventDefault();
    await dispatch(editUserDetails(userDetails));
    onClose();
  };

  const inputHandler = (e, inputName) => {
    setUserDetails(prev => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const handleImageSelect = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUserDetails(prev => ({ ...prev, avatarUrl: imageUrl }));
  };

  const handleAvatarSelect = e => {
    setUserDetails(prev => ({ ...prev, avatarUrl: e.target.src }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" m="2">
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={submitProfileEdit}>
          <ModalBody justifyContent="space-between">
            <Flex flexDir="column" gap={2}>
              <Flex gap={5}>
                <Flex pos="relative">
                  <Avatar
                    src={userDetails?.avatarUrl}
                    alt="profile-image"
                    size="lg"
                    marginRight="2"
                  />
                  <Box pos="absolute" right={-3} bottom={-3}>
                    <UserEditMenu
                      handleAvatarSelect={handleAvatarSelect}
                      handleImageSelect={handleImageSelect}
                    />
                  </Box>
                </Flex>
                <Flex display="flex" flexDir="column" gap={2}>
                  <Heading size="md">{`${userDetails?.firstName} ${userDetails?.lastName}`}</Heading>
                  <Text>@{userDetails?.username}</Text>
                </Flex>
              </Flex>

              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input
                  value={userDetails?.bio}
                  onChange={e => inputHandler(e, 'bio')}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Website</FormLabel>
                <Input
                  value={userDetails?.website}
                  onChange={e => inputHandler(e, 'website')}
                />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              colorScheme="teal"
              type="submit"
              onClick={submitProfileEdit}
            >
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
