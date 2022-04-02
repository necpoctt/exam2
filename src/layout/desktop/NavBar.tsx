import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/svg/logo.svg';
import NavBarItem from './component/NavBarItem';
import { color } from '../../common/color';

const Container = styled('div')({
  position: 'fixed',
  left: '0px',
  bottom: '0px',
  top: '0px',
  width: '80px',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
  backgroundColor: color.bgDarkLight,
  borderRight: '1px solid rgba(0, 0, 0, 0.2)',
  zIndex: 2,
});

const Logo = styled('div')({
  paddingTop: 20,
});

const NavItemContainer = styled('div')({
  paddingTop: 30,
});

const NavBar = () => {
  const navigate = useNavigate();
  const [nowPath, setNowPath] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, []);

  useEffect(() => {
    setNowPath(pathname);
  }, [pathname]);

  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <NavItemContainer>
          <NavBarItem
            title="Home"
            isSelected={!!nowPath.match('/home')}
            onClick={() => navigate('/home')}
          />
          <NavBarItem
            isShowBadge
            title="Tags"
            isSelected={!!nowPath.match('/tags')}
            onClick={() => navigate('/tags')}
          />
        </NavItemContainer>
      </Container>
      <Outlet />
    </>
  );
};

export default NavBar;
