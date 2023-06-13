import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutUser } from '../../services/authServices';
import { useAuthContext } from '../../context/authContext';
import { useDataContext } from '../../context/dataContext';

const LogoutUser = () => {
  const { setToken, setUser } = useAuthContext();
  const { setLoader } = useDataContext();

  const logoutHandler = () => {
    logoutUser(setToken, setUser, setLoader);
  };

  return (
    <IconButton
      icon={<FontAwesomeIcon icon={faRightFromBracket} />}
      onClick={logoutHandler}
    />
  );
};

export default LogoutUser;
