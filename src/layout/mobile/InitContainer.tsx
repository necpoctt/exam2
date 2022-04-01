import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const MobileContainer = styled('div')({
  position: 'fixed',
  zIndex: 9999,
  inset: '20px',
  pointerEvents: 'none',
});

const InitContainer = () => (
  <>
    <MobileContainer />
    <Outlet />
  </>
);

export default InitContainer;
