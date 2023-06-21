import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import SideBarRight from './SideBarRight';
import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import { ScrollToTop } from '../UI/ScrollToTop';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../slices/userSlice';
import { getAllPosts } from '../../slices/postsSlice';

const RootLayout = () => {
  const scrollRef = useRef();

  // Important to fetch the data of new signup user
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Grid
      minH="100dvh"
      templateColumns={{ base: 'auto 1fr', lg: '1fr 3fr 1fr' }}
      templateRows={{
        base: 'auto calc(100dvh - 56.8px - 68.1px) auto',
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
