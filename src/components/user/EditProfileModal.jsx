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
  const [updatedDetails, setUpdatedDetails] = useState({
    bio: user.bio,
    website: user.website,
    avatarUrl: user.avatarUrl,
  });
  const dispatch = useDispatch();

  const detailsChanged = Object.keys(updatedDetails).some(
    item => updatedDetails[item] !== user[item]
  );

  const inputHandler = (e, inputName) => {
    setUpdatedDetails(prev => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const handleImageSelect = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUpdatedDetails(prev => ({ ...prev, avatarUrl: imageUrl }));
  };

  const handleAvatarSelect = e => {
    setUpdatedDetails(prev => ({ ...prev, avatarUrl: e.target.src }));
  };

  const closeHandler = () => {
    setUpdatedDetails({
      bio: user.bio,
      website: user.website,
      avatarUrl: user.avatarUrl,
    });
    onClose();
  };

  const submitProfileEdit = async e => {
    e.preventDefault();
    if (detailsChanged) {
      await dispatch(editUserDetails({ ...user, ...updatedDetails }));
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} size="sm" m="2">
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
                    src={updatedDetails?.avatarUrl}
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
                  <Heading size="md">{`${user?.firstName} ${user?.lastName}`}</Heading>
                  <Text>@{user?.username}</Text>
                </Flex>
              </Flex>

              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input
                  value={updatedDetails?.bio}
                  onChange={e => inputHandler(e, 'bio')}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Website</FormLabel>
                <Input
                  value={updatedDetails?.website}
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
