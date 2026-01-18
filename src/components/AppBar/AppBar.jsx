import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { UserMenu } from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { selectprofessionsItem } from '../../redux/profession/professionSelectors';
import { fetchAllProfessions } from '../../redux/profession/operationsProfessions';
import { Header, Nav, NavGroup, StyledNavLink, AccentLink, LogoWrapper, NavButtonsGroup } from './AppBar.styled';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const professionsItem = useSelector(selectprofessionsItem);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllProfessions());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Header>
      <Nav>
        <NavGroup>
          <LogoWrapper to="/">
            <img
              src={'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1767947733/MMNVK/favicon_gdmzsk.png'}
              alt="MMNVK Logo"
            />
          </LogoWrapper>

          <StyledNavLink to="/" end>
            <HomeOutlined /> Головна
          </StyledNavLink>

          {isLoggedIn &&
            professionsItem.length > 0 &&
            professionsItem.slice(0, 7).map(prof => (
              <StyledNavLink key={prof._id} to={`/${prof?.category || 'unknown'}/${prof?._id}`}>
                {prof.title.length > 12 ? `${prof.title.slice(0, 10)}...` : prof.title}
              </StyledNavLink>
            ))}
        </NavGroup>

        <NavGroup>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <NavButtonsGroup>
              <AccentLink to="/login">
                <LoginOutlined /> Увійти
              </AccentLink>
              <AccentLink to="/register">
                <UserAddOutlined /> Реєстрація
              </AccentLink>
            </NavButtonsGroup>
          )}
        </NavGroup>
      </Nav>
    </Header>
  );
};
