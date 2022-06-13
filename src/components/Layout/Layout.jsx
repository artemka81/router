import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { CustomLink } from 'components/CustomLink';

const Layout = () => {

  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>

      </header>
      <Container>
        <Outlet />
      </Container>

      <footer>FOOTER</footer>
    </>
  );
}

export { Layout }
