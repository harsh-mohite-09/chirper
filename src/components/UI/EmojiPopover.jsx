import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmojiPicker from 'emoji-picker-react';

const EmojiPopover = ({ onEmojiClick }) => {
  const colorModeValue = useColorModeValue('light', 'dark');

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <IconButton
          icon={<FontAwesomeIcon icon={faFaceSmile} />}
          variant="ghost"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
        />
      </PopoverTrigger>
      <PopoverContent p={0} w="fit-content">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody p={0}>
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            theme={colorModeValue}
            emojiStyle="native"
            emojiVersion="1.0"
            searchDisabled
            lazyLoadEmojis
            skinTonesDisabled
            suggestedEmojisMode="recent"
            previewConfig={{
              showPreview: false,
            }}
            height="240px"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPopover;
