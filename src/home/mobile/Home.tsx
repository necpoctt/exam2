import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';
import TextField from '../../shared/TextField';
import Slider from '../../shared/Silder';
import logo from '../../assets/images/svg/logo.svg';

import NavBar from '../../layout/mobile/NavBar';
import color from '../../common/color';

const Container = styled('div')({
  paddingTop: '70px',
  paddingBottom: '66px',
  width: '100%',
});

const Logo = styled('div')({
  position: 'fixed',
  left: '0px',
  right: '0px',
  paddingTop: 'env(safe-area-inset-top)',
  backgroundColor: color.bgDark,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  zIndex: 1200,
  top: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: '70px',
});

const Content = styled('div')({
  flex: '1 1 0%',
});

const Title = styled('div')({
  paddingLeft: '20px',
  paddingRight: '20px',
  '& > h5,& > h3, & > h6': {
    color: color.white,
  },
});

const Search = styled(Typography)({
  marginBottom: '20px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
});

const ResultsPerPage = styled(Typography)({
  marginTop: '28px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
});

const Results = styled(Typography)({
  marginLeft: '10px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '150%',
  marginBottom: '10px',
});

const Line = styled('hr')({
  marginTop: '62%',
  flexShrink: 0,
  borderWidth: '0px 0px thin',
  borderStyle: 'solid',
  borderColor: 'rgb(36, 36, 36)',
});

const ResultNum = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '48px',
  lineHeight: '150%',
  fontWeight: 700,
});

const ResultRow = styled('div')({
  color: color.white,
  display: 'flex',
  alignItems: 'end',
  marginTop: '14px',
  marginBottom: '-2px',
});

const ButtonContainer = styled('div')({
  left: '0px',
  transform: 'unset',
  bottom: '44px',
  padding: '40px 20px',
  position: 'fixed',
  width: '90%',
  background: 'linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 34.61%)',
});

const BottomButton = styled(Button)({
  backgroundColor: color.white,
  color: color.bgDarkDefault,
  width: '100%',
  fontWeight: 700,
});

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 50,
    label: '50',
  },
];

const valuetext = (value: number) => `${value}`;

const Home = () => {
  const [result, setResult] = useState(30);
  const [keyWord, setKeyWord] = useState('');

  const navigate = useNavigate();

  const handleChangeResult = (event: Event, newValue: number | number[]) => {
    setResult(newValue as number);
  };

  const handleClickSearch = () => {
    if (keyWord) {
      navigate(`/home/result/keyword/${keyWord}/page/1/pageSize/${result}`);
    } else {
      navigate(`/home/result/page/1/pageSize/${result}`);
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Content>
          <Title>
            <Search variant="h5">Search</Search>
            <TextField
              fullWidth
              variant="outlined"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setKeyWord(e.target.value)
              }
              value={keyWord}
              title="Keyword"
              maxLength={200}
              placeholder="Keyword"
            />
            <ResultsPerPage variant="h5"># Of Results Per Page</ResultsPerPage>
            <ResultRow>
              <ResultNum variant="h3">{result}</ResultNum>
              <Results variant="h6">result</Results>
            </ResultRow>
            <Slider
              sx={{
                height: 'unset',
              }}
              aria-label="Temperature range"
              value={result}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              max={50}
              min={3}
              onChange={handleChangeResult}
            />
            <Line />
          </Title>

          <ButtonContainer>
            <BottomButton onClick={() => handleClickSearch()}>
              SEARCH
            </BottomButton>
          </ButtonContainer>
        </Content>
      </Container>
    </>
  );
};
export default Home;
