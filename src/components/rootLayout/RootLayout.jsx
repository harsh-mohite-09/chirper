import React, { useRef } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import SideBarRight from './SideBarRight';
import { Outlet } from 'react-router-dom';
import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { ScrollToTop } from '../UI/ScrollToTop';

const RootLayout = () => {
  const scrollRef = useRef();

  return (
    <Grid
      minH="100dvh"
      templateColumns={{ base: 'auto 1fr', lg: '15rem 3fr 1fr' }}
      templateRows={{
        base: 'auto calc(100dvh - 56.8px - 82.4px) auto',
        lg: 'auto calc(100dvh - 56.8px)',
      }}
      templateAreas={{
        base: `"header header header" 
                "main main main"
                "nav nav nav"`,
        lg: `"header header header"
              "nav main aside"`,
      }}
    >
      <GridItem as={'header'} area="header" pos="sticky" top="0" zIndex="5">
        <Header />
      </GridItem>
      <GridItem as={'nav'} area="nav">
        <Navbar />
      </GridItem>
      <GridItem
        ref={scrollRef}
        scrollBehavior="smooth"
        as={'main'}
        area="main"
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: useColorModeValue('#cbd5e0', '#319795'),
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ScrollToTop myRef={scrollRef} />
        <Outlet />
      </GridItem>
      <GridItem
        as={'aside'}
        area={'aside'}
        display={{ base: 'none', lg: 'block' }}
      >
        <SideBarRight />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
