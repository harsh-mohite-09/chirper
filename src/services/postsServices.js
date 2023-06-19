import axios from 'axios';

export const getAllPostsFromServer = () => axios.get('/api/posts');

export const getAllUserPostsFromServer = username =>
  axios.get(`/api/posts/user/${username}`);

export const getBookmarksService = () =>
  axios.get(`/api/users/bookmark`, {
    headers: { authorization: localStorage.getItem('token') },
  });

export const bookmarkPostService = postId =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: localStorage.getItem('token') } }
  );

export const removeBookmarkPostService = postId =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: localStorage.getItem('token') },
    }
  );

export const likePostService = postId =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: localStorage.getItem('token') } }
  );

export const dislikePostService = postId =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: localStorage.getItem('token') } }
  );

export const addPostService = postData =>
  axios.post(
    '/api/posts',
    { postData },
    {
      headers: { authorization: localStorage.getItem('token') },
    }
  );

export const deletePostService = async postId =>
  axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: localStorage.getItem('token') },
  });

export const editPostService = postData =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    {
      headers: { authorization: localStorage.getItem('token') },
    }
  );
