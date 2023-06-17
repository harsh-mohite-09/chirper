import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const { token } = useSelector(store => store.auth);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
