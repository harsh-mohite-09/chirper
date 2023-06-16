import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllUsersFromServer,
  getUserFromServer,
} from '../services/userServices';

const initialState = {
  allUsers: [],
  allUsersStatus: 'idle',
  allUsersError: null,
  userDetails: {},
  userDetailsStatus: 'idle',
  userDetailsError: null,
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
      });
  },
});

export const userReducer = userSlice.reducer;
