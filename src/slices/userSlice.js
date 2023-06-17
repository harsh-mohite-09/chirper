import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  followUserService,
  getAllUsersFromServer,
  getUserFromServer,
  unFollowUserService,
} from '../services/userServices';
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../utils/constants';

const initialState = {
  allUsers: [],
  allUsersStatus: 'idle',
  allUsersError: null,
  userDetails: {},
  userDetailsStatus: 'idle',
  userDetailsError: null,
  followUserStatus: 'idle',
  followUserError: null,
};

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsersFromServer();
      return data.users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserFromServer(username);
      return data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'user/followUser',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await followUserService(userId);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  'user/unfollowUser',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await unFollowUserService(userId);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, state => {
        state.allUsersStatus = 'pending';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.allUsersStatus = 'fulfilled';
        state.allUsers = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.allUsersStatus = 'rejected';
        state.allUsersError = action.payload;
      })
      .addCase(getUser.pending, state => {
        state.userDetailsStatus = 'pending';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userDetailsStatus = 'fulfilled';
        state.userDetails = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.userDetailsStatus = 'rejected';
        state.userDetailsError = action.payload;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.followUserStatus = 'fulfilled';
        const { user, followUser } = action.payload;
        state.allUsers = state.allUsers.map(currentUser =>
          currentUser.username === user.username
            ? { ...user }
            : currentUser.username === followUser.username
            ? { ...followUser }
            : currentUser
        );
        toast.success('Followed User', TOAST_CONFIG);
      })
      .addCase(followUser.rejected, (state, action) => {
        state.followUserStatus = 'rejected';
        state.followUserError = action.payload;
        toast.error(`Error: ${state.followUserError}`, TOAST_CONFIG);
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.followUserStatus = 'fulfilled';
        const { user, followUser } = action.payload;
        state.allUsers = state.allUsers.map(currentUser =>
          currentUser.username === user.username
            ? { ...user }
            : currentUser.username === followUser.username
            ? { ...followUser }
            : currentUser
        );
        toast.success('Unfollowed User', TOAST_CONFIG);
      })
      .addCase(unfollowUser.rejected, (state, action) => {
        state.followUserStatus = 'rejected';
        state.followUserError = action.payload;
        toast.error(`Error: ${state.followUserError}`, TOAST_CONFIG);
      });
  },
});

export const userReducer = userSlice.reducer;
