import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {
  faComment,
  faBookmark,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

import {
  faComment as faCommentSolid,
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
  faShareAlt,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = ({ isAuthUser }) => {
  return (
    <Card w="full" maxW="600px" mt={4} boxShadow="0 0 10px 0 rgba(0,0,0,0.15)">
      <CardBody py={4} px={4}>
        <Flex gap={2}>
          <Box w="50px" h="50px">
            <Avatar name="Harsh Mohite" />
          </Box>
          <Flex flexGrow={1} justifyContent="space-between">
            <Flex flexDir="column" justifyContent="center">
              <Heading size="md">Harsh Mohite</Heading>
              <Text>@harshmohite09</Text>
            </Flex>
            {isAuthUser && (
              <Flex>
                <IconButton
                  variant="ghost"
                  borderRadius="full"
                  icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
                />
              </Flex>
            )}
          </Flex>
        </Flex>
        <Text p={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptates consequatur magni quasi consequuntur velit corrupti quaerat
          eaque repudiandae doloribus, voluptatibus sequi corporis veritatis.
        </Text>
      </CardBody>

      <Divider borderColor="gray.500" />

      <CardFooter p={2}>
        <Flex w="full">
          <Box>
            <IconButton
              borderRadius="full"
              icon={<FontAwesomeIcon icon={faHeart} />}
              bg="transparent"
            />
            <IconButton
              borderRadius="full"
              icon={<FontAwesomeIcon icon={faBookmark} />}
              bg="transparent"
            />
            <IconButton
              borderRadius="full"
              icon={<FontAwesomeIcon icon={faComment} />}
              bg="transparent"
            />
          </Box>
          <Spacer />
          <IconButton
            borderRadius="full"
            icon={<FontAwesomeIcon icon={faShareAlt} />}
            bg="transparent"
          />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Post;
