import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../slices/authSlice';

const LogoutUser = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <IconButton
      icon={<FontAwesomeIcon icon={faRightFromBracket} />}
      onClick={logoutHandler}
    />
  );
};

export default LogoutUser;
