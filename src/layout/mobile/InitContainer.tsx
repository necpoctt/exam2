import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const MobileContainer = styled('div')({
  position: 'fixed',
  zIndex: 9999,
  inset: '20px',
  pointerEvents: 'none',
});

const InitContainer = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <MobileContainer />
      <Outlet />
    </>
  );
};

export default InitContainer;
