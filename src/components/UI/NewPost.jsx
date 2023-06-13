import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  IconButton,
  Spacer,
  Textarea,
} from '@chakra-ui/react';
import { faFaceSmile, faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NewPost = () => {
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
            <Avatar />
          </Box>
          <Box flexGrow={1}>
            <Textarea
              outline="none"
              border="none"
              resize="none"
              focusBorderColor="transparent"
              placeholder="What is happening?"
            />
          </Box>
        </Flex>
      </CardBody>

      <Divider borderColor="gray.500" />

      <CardFooter p={2}>
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
          <Button colorScheme="teal">Post</Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default NewPost;
