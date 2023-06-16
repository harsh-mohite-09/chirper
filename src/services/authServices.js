import axios from 'axios';

export const loginService = userDetails =>
  axios.post('/api/auth/login', userDetails);

export const signUpService = userDetails =>
  axios.post('/api/auth/signup', userDetails);
