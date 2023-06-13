import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    // <Tooltip
    //   label={`Switch to ${text}`}
    //   hasArrow
    //   placement="left"
    //   openDelay={200}
    //   fontSize="md"
    // >
    <IconButton
      size="md"
      fontSize="xl"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
    // </Tooltip>
  );
};
