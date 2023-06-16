import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllPostsFromServer,
  getAllUserPostsFromServer,
} from '../services/postsServices';

const initialState = {
  allPosts: [],
  allPostsStatus: 'idle',
  allPostsError: null,
  userPosts: [],
  userPostsStatus: 'idle',
  userPostsError: null,
};

export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsFromServer();
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  'posts/getUserPosts',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserPostsFromServer(username);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllPosts.pending, state => {
        state.allPostsStatus = 'pending';
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.allPostsStatus = 'fulfilled';
        state.allPosts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.allPostsStatus = 'rejected';
        state.allPostsError = action.payload;
      })
      .addCase(getUserPosts.pending, state => {
        state.userPostsStatus = 'pending';
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.userPostsStatus = 'fulfilled';
        state.userPosts = action.payload;
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.userPostsStatus = 'rejected';
        state.userPostsError = action.payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;
