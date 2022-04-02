import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';
import TextField from '../../shared/TextField';
import Slider from '../../shared/Silder';
import color from '../../common/color';

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

const Container = styled('div')({
  padding: '61px 138px 64px 211px',
  flex: '1 1 0%',
  '& > h5,& > h3, & > h6': {
    color: color.white,
  },
  '& > hr': {
    margin: '30px 0px',
    flexShrink: 0,
    borderWidth: '0px 0px thin',
    borderStyle: 'solid',
    borderColor: 'rgb(36, 36, 36)',
  },
});

const Search = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
  marginBottom: '20px',
});

const Results = styled(Typography)({
  marginLeft: '8px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '150%',
  marginBottom: '16px',
});

const ResultRow = styled('div')({
  color: color.white,
  display: 'flex',
  alignItems: 'end',
  marginTop: 16,
});

const ButtonContainer = styled('div')({
  position: 'absolute',
  transform: 'unset',
  bottom: '87px',
});

const BottomButton = styled(Button)({
  backgroundColor: color.white,
  color: color.bgDarkDefault,
  width: 343,
});

const ResultOfPage = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
});

const ResultNum = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '48px',
  lineHeight: '150%',
  fontWeight: 700,
});

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
    <Container>
      <Search variant="h5">Search</Search>
      <TextField
        fullWidth
        variant="outlined"
        value={keyWord}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeyWord(e.target.value)
        }
        title="Keyword"
        maxLength={200}
        placeholder="Keyword"
      />
      <hr />
      <ResultOfPage variant="h5"># Of Results Per Page</ResultOfPage>

      <ResultRow>
        <ResultNum variant="h3">{result}</ResultNum>
        <Results variant="h6">results</Results>
      </ResultRow>

      <Slider
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
      <hr />
      <ButtonContainer>
        <BottomButton onClick={() => handleClickSearch()}>SEARCH</BottomButton>
      </ButtonContainer>
    </Container>
  );
};
export default Home;
