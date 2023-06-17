import axios from 'axios';

const getAllUsersFromServer = () => axios.get('/api/users');

const getUserFromServer = username => axios.get(`/api/users/${username}`);

const editUserDetailsFromServer = userData =>
  axios.post(
    `/api/users/edit`,
    { userData },
    { headers: { authorization: localStorage.getItem('token') } }
  );

const followUserService = userId =>
  axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: { authorization: localStorage.getItem('token') },
    }
  );

const unFollowUserService = userId =>
  axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: { authorization: localStorage.getItem('token') },
    }
  );

export {
  getAllUsersFromServer,
  getUserFromServer,
  editUserDetailsFromServer,
  followUserService,
  unFollowUserService,
};
