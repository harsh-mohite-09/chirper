import axios from 'axios';

export const getAllUsersFromServer = () => axios.get('/api/users');

export const getUserFromServer = username =>
  axios.get(`/api/users/${username}`);

export const editUserDetailsFromServer = userData =>
  axios.post(
    `/api/users/edit`,
    { userData },
    { headers: { authorization: localStorage.getItem('token') } }
  );
