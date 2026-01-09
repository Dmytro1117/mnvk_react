import { useSelector } from 'react-redux';
import Logotip from '../../../public/favicon.png';
import { Loader } from '../Loader/Loader';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { selectIsLoggedIn, selectIsLoading } from '../../redux/auth/authSelectors';
import { Nav, Link, RegIcon, LogInIcon, HomeIcon, Container, Header, Logo, SearchLogo } from './AppBar.styled';

export const AppBar = () => {
  const isLoaggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Header>
      {isLoading && <Loader />}

      <Container>
        <Nav>
          <Logo to="/">
            <SearchLogo src={Logotip} alt="logo" />
          </Logo>
          <div>
            <Link to="/">
              <HomeIcon />
              Головна
            </Link>

            {isLoaggedIn && <Link to="/driver">Водій</Link>}
            {isLoaggedIn && <Link to="/secretary">Секретар</Link>}
            {isLoaggedIn && <Link to="/web">Дизайнер</Link>}
            {isLoaggedIn && <Link to="/locksmith">Слюсар</Link>}
            {isLoaggedIn && <Link to="/cook">Кухар</Link>}
            {isLoaggedIn && <Link to="/psychologist">Психолог</Link>}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <RegIcon />
                  Реєстрація
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Увійти
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </Header>
  );
};
