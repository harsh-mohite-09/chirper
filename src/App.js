import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/rootLayout/RootLayout';
import { PrivateRoute } from './components/auth/PrivatateRoute';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import BookmarksPage from './pages/BookmarksPage';
import LikedPage from './pages/LikedPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostDetailPage from './pages/PostDetailPage';
import UserProfilePage from './pages/UserProfilePage';
import ErrorPage from './pages/ErrorPage';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { getAllUsers } from './slices/userSlice';
import { useDispatch } from 'react-redux';
import { getAllPosts } from './slices/postsSlice';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/explore',
        element: <ExplorePage />,
      },
      {
        path: '/bookmarks',
        element: <BookmarksPage />,
      },
      {
        path: '/liked',
        element: <LikedPage />,
      },
      {
        path: '/post/:id',
        element: <PostDetailPage />,
      },
      {
        path: '/profile/:username',
        element: <UserProfilePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
