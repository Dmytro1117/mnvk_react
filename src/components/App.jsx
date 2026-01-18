import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import { refreshUser } from '../redux/auth/operationsAuth';
import { selectIsRefreshing, selectToken } from '../redux/auth/authSelectors.js';
import '../helpers/notifyConfig.js';

const Register = lazy(() => import('../pages/Register/Register'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const VerifyEmail = lazy(() => import('../pages/VerifyEmail/VerifyEmail'));
const ResendEmail = lazy(() => import('../pages/ResendEmail/ResendEmail'));
const AdminAddProfession = lazy(() => import('../components/AdminAddProfession/AdminAddProfession.jsx'));
const AdminRoute = lazy(() => import('../components/AdminRoute/AdminRoute.jsx'));
const ProfessionStartingPage = lazy(() => import('../pages/ProfessionStartingPage/ProfessionStartingPage.jsx'));
const ProfessionAbout = lazy(() => import('../pages/ProfessionAbout/ProfessionAbout.jsx'));
const ProfessionGallery = lazy(() => import('../pages/ProfessionGallery/ProfessionGallery.jsx'));
const ProfessionLecture = lazy(() => import('../pages/ProfessionLecture/ProfessionLecture.jsx'));

export const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/verify-email')) return;
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token, location.pathname]);

  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/verify-email/:verificationToken" element={<VerifyEmail />} />

          <Route
            path="/resend-email"
            element={<RestrictedRoute redirectTo="/contacts" component={<ResendEmail />} />}
          />
          <Route index element={<Home />} />

          <Route
            path="/:category/:id"
            element={<PrivateRoute component={<ProfessionStartingPage />} redirectTo="/" />}
          />

          <Route
            path="/:category/:id/about"
            element={<PrivateRoute component={<ProfessionAbout />} redirectTo="/" />}
          />
          <Route
            path="/:category/:id/gallery"
            element={<PrivateRoute component={<ProfessionGallery />} redirectTo="/" />}
          />
          <Route
            path="/:category/:id/lec"
            element={<PrivateRoute component={<ProfessionLecture />} redirectTo="/" />}
          />

          <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<Login />} />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/" component={<Register />} />} />
          <Route path="/admin/add-profession" element={<AdminRoute component={<AdminAddProfession />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
};
