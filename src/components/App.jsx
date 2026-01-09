import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
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

const Driver = lazy(() => import('../pages/Driver/DriverStartingPage/DriverStartingPage'));
const DriverAbout = lazy(() => import('../pages/Driver/DriverAbout/DriverAbout'));
const DriverGallery = lazy(() => import('../pages/Driver/DriverGallery/DriverGallery'));
const DriverLecture = lazy(() => import('../pages/Driver/DriverLecture/DriverLecture'));
const DriverQuizz = lazy(() => import('../pages/Driver/DriverQuizz/DriverQuizz'));

const Secretary = lazy(() => import('../pages/Secretary/SecretaryStartingPage/SecretaryStartingPage'));
const SecretaryAbout = lazy(() => import('../pages/Secretary/SecretaryAbout/SecretaryAbout'));
const SecretaryGallery = lazy(() => import('../pages/Secretary/SecretaryGallery/SecretaryGallery'));
const SecretaryLecture = lazy(() => import('../pages/Secretary/SecretaryLecture/SecretaryLecture'));
const SecretaryQuizz = lazy(() => import('../pages/Secretary/SecretaryQuizz/Quiz'));

const WebDesign = lazy(() => import('../pages/webDesign/webDesignStartingPage/webDesignStartingPage'));
const WebDesignAbout = lazy(() => import('../pages/webDesign/webDesignAbout/webDesignAbout'));
const WebDesignGallery = lazy(() => import('../pages/webDesign/webDesignGallery/webDesignGallery'));
const WebDesignLecture = lazy(() => import('../pages/webDesign/webDesignLecture/webDesignLecture'));
const WebDesignQuizz = lazy(() => import('../pages/webDesign/webDesignQuizz/webDesignQuizz'));

const Locksmith = lazy(() => import('../pages/Locksmith/LocksmithStartingPage/LocksmithStartingPage'));
const LocksmithAbout = lazy(() => import('../pages/Locksmith/LocksmithAbout/LocksmithAbout'));
const LocksmithGallery = lazy(() => import('../pages/Locksmith/LocksmithGallery/LocksmithGallery'));
const LocksmithLecture = lazy(() => import('../pages/Locksmith/LocksmithLecture/LocksmithLecture'));
const LocksmithQuizz = lazy(() => import('../pages/Locksmith/LocksmithQuizz/LocksmithQuizz'));

const Cook = lazy(() => import('../pages/Cook/CookStartingPage/CookStartingPage'));
const CookAbout = lazy(() => import('../pages/Cook/CookAbout/CookAbout'));
const CookGallery = lazy(() => import('../pages/Cook/CookGallery/CookGallery'));
const CookLecture = lazy(() => import('../pages/Cook/CookLecture/CookLecture'));
const CookQuizz = lazy(() => import('../pages/Cook/CookQuizz/CookQuizz'));

const Psychologist = lazy(() => import('../pages/Psychologist/PsychologistStartingPage/PsychologistStartingPage'));
const PsychologistAbout = lazy(() => import('../pages/Psychologist/PsychologistAbout/PsychologistAbout'));
const PsychologistGallery = lazy(() => import('../pages/Psychologist/PsychologistGallery/PsychologistGallery'));
const PsychologistLecture = lazy(() => import('../pages/Psychologist/PsychologistLecture/PsychologistLecture'));
const PsychologistQuizz = lazy(() => import('../pages/Psychologist/PsychologistQuizz/PsychologistQuizz'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();
  const token = useSelector(selectToken);

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

          <Route path="/driver" element={<PrivateRoute component={<Driver />} redirectTo="/" />} />
          <Route path="/driver/about" element={<PrivateRoute component={<DriverAbout />} redirectTo="/" />} />
          <Route path="/driver/gallery" element={<PrivateRoute component={<DriverGallery />} redirectTo="/" />} />
          <Route path="/driver/lec" element={<PrivateRoute component={<DriverLecture />} redirectTo="/" />} />
          <Route path="/driver/test" element={<PrivateRoute component={<DriverQuizz />} redirectTo="/" />} />

          <Route path="/secretary" element={<PrivateRoute component={<Secretary />} redirectTo="/" />} />
          <Route path="/secretary/about" element={<PrivateRoute component={<SecretaryAbout />} redirectTo="/" />} />
          <Route path="/secretary/gallery" element={<PrivateRoute component={<SecretaryGallery />} redirectTo="/" />} />
          <Route path="/secretary/lec" element={<PrivateRoute component={<SecretaryLecture />} redirectTo="/" />} />
          <Route path="/secretary/test" element={<PrivateRoute component={<SecretaryQuizz />} redirectTo="/" />} />

          <Route path="/web" element={<PrivateRoute component={<WebDesign />} redirectTo="/" />} />
          <Route path="/web/about" element={<PrivateRoute component={<WebDesignAbout />} redirectTo="/" />} />
          <Route path="/web/gallery" element={<PrivateRoute component={<WebDesignGallery />} redirectTo="/" />} />
          <Route path="/web/lec" element={<PrivateRoute component={<WebDesignLecture />} redirectTo="/" />} />
          <Route path="/web/test" element={<PrivateRoute component={<WebDesignQuizz />} redirectTo="/" />} />

          <Route path="/locksmith" element={<PrivateRoute component={<Locksmith />} redirectTo="/" />} />
          <Route path="/locksmith/about" element={<PrivateRoute component={<LocksmithAbout />} redirectTo="/" />} />
          <Route path="/locksmith/gallery" element={<PrivateRoute component={<LocksmithGallery />} redirectTo="/" />} />
          <Route path="/locksmith/lec" element={<PrivateRoute component={<LocksmithLecture />} redirectTo="/" />} />
          <Route path="/locksmith/test" element={<PrivateRoute component={<LocksmithQuizz />} redirectTo="/" />} />

          <Route path="/psychologist" element={<PrivateRoute component={<Psychologist />} redirectTo="/" />} />
          <Route
            path="/psychologist/about"
            element={<PrivateRoute component={<PsychologistAbout />} redirectTo="/" />}
          />
          <Route
            path="/psychologist/gallery"
            element={<PrivateRoute component={<PsychologistGallery />} redirectTo="/" />}
          />
          <Route
            path="/psychologist/lec"
            element={<PrivateRoute component={<PsychologistLecture />} redirectTo="/" />}
          />
          <Route
            path="/psychologist/test"
            element={<PrivateRoute component={<PsychologistQuizz />} redirectTo="/" />}
          />

          <Route path="/cook" element={<PrivateRoute component={<Cook />} redirectTo="/" />} />

          <Route path="/cook/about" element={<PrivateRoute component={<CookAbout />} redirectTo="/" />} />

          <Route path="/cook/gallery" element={<PrivateRoute component={<CookGallery />} redirectTo="/" />} />

          <Route path="/cook/lec" element={<PrivateRoute component={<CookLecture />} redirectTo="/" />} />

          <Route path="/cook/test" element={<PrivateRoute component={<CookQuizz />} redirectTo="/" />} />

          <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<Login />} />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/" component={<Register />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
};
