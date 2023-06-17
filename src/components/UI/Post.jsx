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
import { useDispatch, useSelector } from 'react-redux';
import {
  addBookmark,
  dislikePost,
  likePost,
  removeBookmark,
} from '../../slices/postsSlice';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { allUsers: users } = useSelector(store => store.user);
  const { user: authUser } = useSelector(store => store.auth);
  const { bookmarks } = useSelector(store => store.posts);
  const dispatch = useDispatch();

  const user = users.find(user => user?.username === post?.username);

  const isAuthUser = authUser?.username === user?.username;

  const isBookmarked = bookmarks.some(id => id === post._id);

  const isLiked = post.likes.likedBy.some(id => id === authUser._id);

  const addToBookmarksHandler = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(post._id));
    } else {
      dispatch(addBookmark(post._id));
    }
  };

  const likeDislikeHandler = () => {
    if (isLiked) {
      dispatch(dislikePost(post._id));
    } else {
      dispatch(likePost(post._id));
    }
  };

  return (
    <Card w="full" maxW="600px" mt={4} boxShadow="0 0 10px 0 rgba(0,0,0,0.15)">
      <CardBody py={4} px={4}>
        <Flex gap={2}>
          <Link to={`/profile/${post.username}`}>
            <Box w="50px" h="50px">
              <Avatar
                src={user?.avatarUrl}
                name={`${user?.firstName} ${user?.lastName}`}
              />
            </Box>
          </Link>
          <Flex flexGrow={1} justifyContent="space-between">
            <Flex flexDir="column" justifyContent="center">
              <Flex gap={2} alignItems="center">
                <Link to={`/profile/${post.username}`}>
                  <Heading size="md">{`${user?.firstName} ${user?.lastName}`}</Heading>
                </Link>
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
          <Flex alignItems="center">
            <IconButton
              borderRadius="full"
              icon={
                <FontAwesomeIcon
                  icon={isLiked ? faHeartSolid : faHeart}
                  color={isLiked ? '#E53E3E' : 'null'}
                />
              }
              bg="transparent"
              onClick={likeDislikeHandler}
            />
            {post.likes.likeCount > 0 && <Text>{post.likes.likeCount}</Text>}
            <IconButton
              borderRadius="full"
              icon={
                <FontAwesomeIcon
                  icon={isBookmarked ? faBookmarkSolid : faBookmark}
                  color={isBookmarked ? '#38A169' : 'null'}
                />
              }
              bg="transparent"
              onClick={addToBookmarksHandler}
            />
          </Flex>
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
