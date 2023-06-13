import axios from 'axios';
import { TOAST_CONFIG } from '../utils/constants';
import { toast } from 'react-toastify';

export const loginUser = async (
  setLoader,
  setToken,
  setUser,
  location,
  navigate,
  userConfig
) => {
  try {
    setLoader(true);
    const response = await axios.post(`/api/auth/login`, userConfig);
    setLoader(false);
    const token = response.data.encodedToken;
    const foundUser = response.data.foundUser;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(foundUser));
    setToken(token);
    setUser(foundUser);
    if (location?.state?.from) {
      navigate(location?.state?.from);
    } else {
      navigate('/');
    }
  } catch (error) {
    toast.error('User ' + error.response.statusText, TOAST_CONFIG);
    setLoader(false);
  }
};

export const signupUser = async (
  setLoader,
  setToken,
  setUser,
  location,
  navigate,
  userConfig,
  setUserConfig
) => {
  if (userConfig.password !== userConfig.confirmPassword) {
    toast.error('Passwords do not match!', TOAST_CONFIG);
    return;
  }

  try {
    setLoader(true);
    const response = await axios.post(`/api/auth/signup`, userConfig);
    setLoader(false);
    // saving the encodedToken in the localStorage
    const token = response.data.encodedToken;
    const createdUser = response.data.createdUser;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(createdUser));
    setToken(token);
    setUser(createdUser);
    if (location?.state?.from) {
      navigate(location?.state?.from);
    } else {
      navigate('/');
    }
  } catch (error) {
    if (error.response.status === 422) {
      toast.error('User Already Exists!', TOAST_CONFIG);
    }
    if (error.response.status === 500) {
      toast.error(error.response.statusText, TOAST_CONFIG);
    }
    setLoader(false);
    setUserConfig({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  }
};

export const logoutUser = (setToken, setUser, setLoader) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  setToken(null);
  setUser(null);
  setLoader(true);
  setTimeout(() => {
    setLoader(false);
  }, 500);
};
