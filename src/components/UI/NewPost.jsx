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
  Spinner,
  Textarea,
} from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../slices/postsSlice';
import EmojiPopover from './EmojiPopover';
import { useMedia } from '../../hooks/useMedia';

const initialPostData = {
  content: '',
  mediaURL: '',
};

const NewPost = () => {
  const { user: authUser } = useSelector(store => store.auth);
  const [postData, setPostData] = useState(initialPostData);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const { uploadMedia } = useMedia();

  const btnIsDisabled = postData.content.trim().length === 0;

  const createPostHandler = () => {
    dispatch(addPost(postData));
    setPostData(initialPostData);
  };

  const onUploadClick = async e => {
    setLoader(true);
    await uploadMedia(e.target.files[0], setPostData);
    setLoader(false);
    e.target.value = null;
  };

  const handleImageRemove = () => {
    setPostData(prev => ({ ...prev, mediaURL: '' }));
  };

  const inputHandler = e => {
    setPostData(prev => ({ ...prev, content: e.target.value }));
  };

  const handleEmojiClick = e => {
    setPostData(prev => ({ ...prev, content: prev.content + e.emoji }));
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
        {loader && <Spinner />}
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
          <Flex alignItems="center" ml={2} gap={2}>
            <FormControl display="flex" alignItems="center" width="1rem">
              <FormLabel m={0} cursor="pointer">
                <FontAwesomeIcon icon={faImage} />
              </FormLabel>
              <Input
                type="file"
                visibility="hidden"
                accept="image/*, video/*"
                onChange={onUploadClick}
              />
            </FormControl>
            <EmojiPopover onEmojiClick={handleEmojiClick} />
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
