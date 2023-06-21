import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },

  styles: {
    global: ({ colorMode }) => ({
      '.EmojiPickerReact': {
        '--epr-emoji-size': '1.5rem',
        '--epr-category-navigation-button-size': '1.5rem',
        fontSize: '0.8rem',
      },
      '&::-webkit-scrollbar': {
        width: '2px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: colorMode === 'dark' ? '#319795' : '#cbd5e0',
        borderRadius: '2px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
    }),
  },
});

export default theme;
