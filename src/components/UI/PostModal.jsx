import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faImage } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost } from '../../slices/postsSlice';
// import EmojiPicker from 'emoji-picker-react';

const initialPostData = {
  content: '',
  mediaURL: '',
};

const PostModal = ({ isOpen, onClose, postDetails }) => {
  const initialRef = useRef();
  const { user: authUser } = useSelector(store => store.auth);
  const [postData, setPostData] = useState(postDetails || initialPostData);
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const dispatch = useDispatch();

  const btnIsDisabled = postData.content.trim().length === 0;

  const createPostHandler = async () => {
    if (postDetails) {
      await dispatch(editPost(postData));
    } else {
      await dispatch(addPost(postData));
      setPostData(initialPostData);
    }
    onClose();
  };

  const inputHandler = (e, inputType) => {
    setPostData(prev => ({ ...prev, [inputType]: e.target.value }));
  };

  const handleImageSelect = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPostData(prev => ({ ...prev, mediaURL: imageUrl }));
  };

  const handleImageRemove = () => {
    setPostData(prev => ({ ...prev, mediaURL: '' }));
  };

  // const colorModeValue = useColorModeValue('light', 'dark');

  // const previewConfig = {
  //   showPreview: false,
  // };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent w={{ base: '90vw' }}>
        <ModalHeader>{postDetails ? 'Edit Post' : 'New Post'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <Flex gap={2} h="10rem">
            <Box w="50px" h="50px">
              <Avatar
                src={authUser.avatarUrl}
                name={`${authUser.firstName} ${authUser.lastName}`}
              />
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
                value={postData.content}
                onChange={e => inputHandler(e, 'content')}
              />
            </Box>
          </Flex>
          {postData.mediaURL && (
            <Box w="8rem">
              <Image src={postData.mediaURL} objectFit="contain" />
              <Button w="full" size="sm" onClick={handleImageRemove}>
                Remove
              </Button>
            </Box>
          )}
        </ModalBody>
        <Divider borderColor="gray.500" />
        <ModalFooter p={2}>
          <Flex w="full">
            <Flex alignItems="center" ml={2}>
              <FormControl display="flex" alignItems="center" width="1rem">
                <FormLabel m={0} cursor="pointer">
                  <FontAwesomeIcon icon={faImage} />
                </FormLabel>
                <Input
                  type="file"
                  display="none"
                  accept="image/*, video/*"
                  onChange={handleImageSelect}
                />
              </FormControl>

              {/* <Popover>
                <PopoverTrigger>
                  <IconButton
                    icon={<FontAwesomeIcon icon={faFaceSmile} />}
                    variant="ghost"
                    borderRadius="full"
                    onClick={() => setShowEmojiPicker(true)}
                  />
                </PopoverTrigger>
                <PopoverContent p={0}>
                  <PopoverArrow />
                  <PopoverCloseButton
                    onClick={() => setShowEmojiPicker(false)}
                  />
                  <PopoverBody p={0}>
                    {showEmojiPicker && (
                      <EmojiPicker
                        theme={colorModeValue}
                        searchDisabled
                        lazyLoadEmojis
                        skinTonesDisabled
                        previewConfig={previewConfig}
                        height="250px"
                      />
                    )}
                  </PopoverBody>
                </PopoverContent>
              </Popover> */}
            </Flex>
            <Spacer />
            <Button
              colorScheme="teal"
              borderRadius="full"
              onClick={createPostHandler}
              isDisabled={btnIsDisabled}
            >
              {postDetails ? 'Update' : 'Post'}
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
