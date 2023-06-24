import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import SideBarUser from '../rootLayout/SideBarUser';

const FollowPopover = ({ type, user }) => {
  return (
    <Popover isLazy initialFocusRef={null}>
      <PopoverTrigger>
        <Text>
          {user[type]?.length} {type[0].toUpperCase() + type.slice(1)}
        </Text>
      </PopoverTrigger>
      <PopoverContent p={0} w="fit-content">
        <PopoverArrow />
        <PopoverBody p={0}>
          <Flex
            flexDir="column"
            gap="4"
            maxH="13rem"
            overflowY="scroll"
            p="2"
            width="12rem"
          >
            {user[type]?.length > 0 ? (
              user[type].map(user => (
                <SideBarUser key={user._id} user={user} isSearchUser />
              ))
            ) : (
              <Text textAlign="center" fontSize="0.9rem">
                No {type[0].toUpperCase() + type.slice(1)} Yet
              </Text>
            )}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FollowPopover;
