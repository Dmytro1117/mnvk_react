import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ component: Component }) => {
  const { user, isLoaggedIn, isRefreshing } = useSelector(state => state.auth);

  const isAdmin = user?.role === 'admin';

  if (isRefreshing) return null;

  return isLoaggedIn && isAdmin ? Component : <Navigate to="/" />;
};

export default AdminRoute;
