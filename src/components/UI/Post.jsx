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
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';

import {
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
  faShareAlt,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
  const { allUsers: users } = useSelector(store => store.user);
  const { user: authUser } = useSelector(store => store.auth);

  const user = users.find(user => user?.username === post?.username);

  const isAuthUser = authUser?.username === user?.username;

  return (
    <Card w="full" maxW="600px" mt={4} boxShadow="0 0 10px 0 rgba(0,0,0,0.15)">
      <CardBody py={4} px={4}>
        <Flex gap={2}>
          <Box w="50px" h="50px">
            <Avatar
              src={user?.avatarUrl}
              name={`${user?.firstName} ${user?.lastName}`}
            />
          </Box>
          <Flex flexGrow={1} justifyContent="space-between">
            <Flex flexDir="column" justifyContent="center">
              <Flex gap={2} alignItems="center">
                <Heading size="md">{`${user?.firstName} ${user?.lastName}`}</Heading>
                <Text fontSize="sm">
                  {new Date(post?.createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Text>
              </Flex>
              <Text>@{post?.username}</Text>
            </Flex>
            {isAuthUser && (
              <Flex>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
                    variant="ghost"
                    borderRadius="full"
                  />
                  <MenuList minW="8rem">
                    <MenuItem icon={<EditIcon />}>Edit</MenuItem>
                    <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Flex flexDir="column" gap={4} mt={4}>
          <Text>{post?.content}</Text>
          <Image src={post?.mediaURL} />
        </Flex>
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
