import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService, signUpService } from '../services/authServices';
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../utils/constants';
import { editUserDetailsFromServer } from '../services/userServices';
import { getAllUsers } from './userSlice';

const initialState = {
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
  loading: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await loginService(userDetails);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.errors[0]);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await signUpService(userDetails);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.errors[0]);
    }
  }
);

export const editUserDetails = createAsyncThunk(
  'auth/editUserDetails',
  async (userDetails, thunkApi) => {
    try {
      const { data } = await editUserDetailsFromServer(userDetails);
      thunkApi.dispatch(getAllUsers());
      return data.user;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: state => {
      state.token = '';
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.encodedToken;
        state.user = action.payload.foundUser;
        state.loading = false;
        localStorage.setItem('token', action.payload.encodedToken);
        localStorage.setItem('user', JSON.stringify(action.payload.foundUser));
        toast.success(`Welcome back! ${state.user.firstName}`, TOAST_CONFIG);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error(`${state.error}`, TOAST_CONFIG);
      })
      .addCase(signupUser.pending, state => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        state.loading = false;
        localStorage.setItem('token', action.payload.encodedToken);
        localStorage.setItem(
          'user',
          JSON.stringify(action.payload.createdUser)
        );
        toast.success(
          `Account Created Successfully,
           Welcome ${state.user.firstName} `,
          TOAST_CONFIG
        );
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error(`${state.error}`, TOAST_CONFIG);
      })
      .addCase(editUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        toast.success(`Profile Updated`, TOAST_CONFIG);
      })
      .addCase(editUserDetails.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(`Error: ${state.error}`, TOAST_CONFIG);
      });
  },
});

export const { logoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
