import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPostService,
  bookmarkPostService,
  deletePostService,
  dislikePostService,
  editPostService,
  getAllPostsFromServer,
  getAllUserPostsFromServer,
  getBookmarksService,
  likePostService,
  removeBookmarkPostService,
} from '../services/postsServices';
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../utils/constants';

const initialState = {
  allPosts: [],
  allPostsStatus: 'idle',
  allPostsError: null,
  userPosts: [],
  userPostsStatus: 'idle',
  userPostsError: null,
  bookmarks: [],
  bookmarksStatus: 'idle',
  bookmarksError: null,
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

export const getBookmarks = createAsyncThunk(
  'posts/getBookmarks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBookmarksService();
      return data.bookmarks;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addBookmark = createAsyncThunk(
  'post/addBookmark',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await bookmarkPostService(postId);
      return data.bookmarks;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeBookmark = createAsyncThunk(
  'post/removeBookmark',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await removeBookmarkPostService(postId);
      return data.bookmarks;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const likePost = createAsyncThunk(
  'posts/likePost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const dislikePost = createAsyncThunk(
  'posts/dislikePost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (postData, { rejectWithValue }) => {
    try {
      const { data } = await addPostService(postData);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(postId);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editPost = createAsyncThunk(
  'posts/editPost',
  async (postData, { rejectWithValue }) => {
    try {
      const { data } = await editPostService(postData);
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
      })
      .addCase(getBookmarks.pending, state => {
        state.bookmarksStatus = 'pending';
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.bookmarksStatus = 'fulfilled';
        state.bookmarks = action.payload;
      })
      .addCase(getBookmarks.rejected, (state, action) => {
        state.bookmarksStatus = 'rejected';
        state.bookmarksError = action.payload;
      })
      .addCase(addBookmark.fulfilled, (state, action) => {
        state.bookmarksStatus = 'fulfilled';
        state.bookmarks = action.payload;
        toast.success('Added To Bookmarks', TOAST_CONFIG);
      })
      .addCase(addBookmark.rejected, (state, action) => {
        state.bookmarksStatus = 'rejected';
        state.bookmarksError = action.payload;
      })
      .addCase(removeBookmark.fulfilled, (state, action) => {
        state.bookmarksStatus = 'fulfilled';
        state.bookmarks = action.payload;
        toast.success('Removed From Bookmarks', TOAST_CONFIG);
      })
      .addCase(removeBookmark.rejected, (state, action) => {
        state.bookmarksStatus = 'rejected';
        state.bookmarksError = action.payload;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.allPosts = action.payload;
      })
      .addCase(likePost.rejected, (state, action) => {
        state.allPostsError = action.payload;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.allPosts = action.payload;
      })
      .addCase(dislikePost.rejected, (state, action) => {
        state.allPostsError = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        toast.success('Created Post!', TOAST_CONFIG);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.allPostsError = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        toast.error('Deleted Post!', TOAST_CONFIG);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.allPostsError = action.payload;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        toast.success('Updated Post!', TOAST_CONFIG);
      })
      .addCase(editPost.rejected, (state, action) => {
        state.allPostsError = action.payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;
