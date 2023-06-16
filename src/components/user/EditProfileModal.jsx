import {
  Avatar,
  AvatarBadge,
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
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserDetails } from '../../slices/authSlice';

const EditProfileModal = ({ isOpen, onClose, user }) => {
  const [userDetails, setUserDetails] = useState(user);
  const dispatch = useDispatch();

  const { avatarUrl, bio, website, firstName, lastName } = userDetails;

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
                <Avatar
                  src={avatarUrl}
                  alt="profile-image"
                  size="lg"
                  marginRight="2"
                  name={`${firstName} ${lastName}}`}
                >
                  <AvatarBadge boxSize="1.5em" border="0">
                    <FormControl>
                      <FormLabel
                        cursor="pointer"
                        position="absolute"
                        right="-10px"
                        bottom="0"
                      >
                        <FontAwesomeIcon icon={faCamera} />
                      </FormLabel>
                      <Input type="file" visibility="hidden" accept="image/*" />
                    </FormControl>
                  </AvatarBadge>
                </Avatar>
                <Flex display="flex" flexDir="column" gap={2}>
                  <Heading size="md">{`${userDetails.firstName} ${userDetails.lastName}`}</Heading>
                  <Text>@{userDetails.username}</Text>
                </Flex>
              </Flex>

              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input value={bio} onChange={e => inputHandler(e, 'bio')} />
              </FormControl>
              <FormControl>
                <FormLabel>Website</FormLabel>
                <Input
                  value={website}
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
