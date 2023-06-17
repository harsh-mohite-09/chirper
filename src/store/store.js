import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../slices/authSlice';
import { userReducer } from '../slices/userSlice';
import { postsReducer } from '../slices/postsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    posts: postsReducer,
  },
});
