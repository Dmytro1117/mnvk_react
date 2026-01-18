import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../../components/AppBar/AppBar';
import Footer from '../../components/Footer/Footer';
import { Container, Content } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Content>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
    </Container>
  );
};
