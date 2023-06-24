import React from 'react';
import { IconButton, Tooltip, useMediaQuery } from '@chakra-ui/react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../slices/authSlice';

const LogoutUser = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)');
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <Tooltip label="Log Out" openDelay={500} isDisabled={isMobile}>
      <IconButton
        icon={<FontAwesomeIcon icon={faRightFromBracket} />}
        onClick={logoutHandler}
      />
    </Tooltip>
  );
};

export default LogoutUser;
