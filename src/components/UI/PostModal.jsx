import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Textarea,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faImage } from '@fortawesome/free-solid-svg-icons';

const PostModal = ({ isOpen, onClose }) => {
  const initialRef = useRef();

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent w={{ base: '90vw' }}>
        <ModalHeader>New Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <Flex gap={2} h="10rem">
            <Box w="50px" h="50px">
              <Avatar />
            </Box>
            <Box flexGrow={1}>
              <Textarea
                ref={initialRef}
                h="full"
                p={2}
                outline="none"
                border="none"
                resize="none"
                focusBorderColor="transparent"
                placeholder="What is happening?"
              />
            </Box>
          </Flex>
        </ModalBody>
        <Divider borderColor="gray.500" />
        <ModalFooter p={2}>
          <Flex w="full">
            <Box>
              <IconButton
                borderRadius="full"
                icon={<FontAwesomeIcon icon={faImage} />}
                bg="transparent"
              />
              <IconButton
                borderRadius="full"
                icon={<FontAwesomeIcon icon={faFaceSmile} />}
                bg="transparent"
              />
            </Box>
            <Spacer />
            <Button colorScheme="teal" borderRadius="full">
              Post
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
