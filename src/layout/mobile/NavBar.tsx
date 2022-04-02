import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import card from '../../assets/images/svg/card.svg';
import darkCard from '../../assets/images/svg/darkCard.svg';

const Container = styled(Paper)({
  zIndex: 2,
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(24, 24, 24, 0.2)',
});

const BoxContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  height: 64,
  boxShadow: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
  backgroundColor: 'rgba(24, 24, 24, 0.2)',
});

const LeftIcon = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  textDecoration: 'none',
});

const RightIcon = styled('a')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingLeft: '56px',
  textDecoration: 'none',
});

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Container elevation={3}>
      <BoxContainer>
        <LeftIcon onClick={() => navigate('/home')}>
          <img src={card} alt="card" />
        </LeftIcon>
        <RightIcon onClick={() => navigate('/tags')}>
          <img src={darkCard} alt="darkCard" />
        </RightIcon>
      </BoxContainer>
    </Container>
  );
};

export default NavBar;
