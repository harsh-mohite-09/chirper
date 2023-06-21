import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Spacer,
  Textarea,
} from '@chakra-ui/react';
import { faFaceSmile, faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../slices/postsSlice';

const initialPostData = {
  content: '',
  mediaURL: '',
};

const NewPost = () => {
  const { user: authUser } = useSelector(store => store.auth);
  const [postData, setPostData] = useState(initialPostData);
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const dispatch = useDispatch();

  const btnIsDisabled = postData.content.trim().length === 0;

  const createPostHandler = () => {
    dispatch(addPost(postData));
    setPostData(initialPostData);
  };

  const inputHandler = e => {
    setPostData(prev => ({ ...prev, content: e.target.value }));
  };

  const handleImageSelect = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPostData(prev => ({ ...prev, mediaURL: imageUrl }));
  };

  const handleImageRemove = () => {
    setPostData(prev => ({ ...prev, mediaURL: '' }));
  };

  return (
    <Card
      borderTop="8px"
      borderColor="teal.400"
      w="full"
      maxW="600px"
      mt={4}
      boxShadow="0 0 10px 0 rgba(0,0,0,0.15)"
      display={{ base: 'none', lg: 'block' }}
    >
      <CardBody py={4} px={4}>
        <Flex gap={2}>
          <Box w="50px" h="50px">
            <Avatar
              src={authUser.avatarUrl}
              name={`${authUser.firstName} ${authUser.lastName}`}
            />
          </Box>
          <Box flexGrow={1}>
            <Textarea
              outline="none"
              border="none"
              resize="none"
              focusBorderColor="transparent"
              placeholder="What is happening?"
              value={postData.content}
              onChange={inputHandler}
              rows={5}
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
      </CardBody>

      <Divider borderColor="gray.500" />

      <CardFooter p={2}>
        <Flex w="full">
          <Flex alignItems="center" ml={2}>
            <FormControl display="flex" alignItems="center" width="1rem">
              <FormLabel m={0} cursor="pointer">
                <FontAwesomeIcon icon={faImage} />
              </FormLabel>
              <Input
                type="file"
                visibility="hidden"
                accept="image/*, video/*"
                onChange={handleImageSelect}
              />
            </FormControl>
          </Flex>
          <Spacer />
          <Button
            colorScheme="teal"
            borderRadius="full"
            onClick={createPostHandler}
            isDisabled={btnIsDisabled}
          >
            Post
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default NewPost;
