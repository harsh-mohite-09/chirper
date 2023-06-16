import axios from 'axios';

export const getAllPostsFromServer = () => axios.get('/api/posts');

export const getAllUserPostsFromServer = username =>
  axios.get(`/api/posts/user/${username}`);
