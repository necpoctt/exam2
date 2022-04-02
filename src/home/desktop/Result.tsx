import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';
import back from '../../assets/images/svg/back.svg';
import UserService from '../../service/UserService';
import ResultList from './component/ResultList';
import color from '../../common/color';

const Container = styled('div')({
  padding: '96px 118px 64px 210px',
  flex: '1 1 0%',
  '& > h5': {
    color: color.white,
  },
});

const Search = styled(Typography)({
  display: 'flex',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '30px',
  lineHeight: '150%',
  marginBottom: '22px',
  position: 'relative',
  right: '44px',
  cursor: 'pointer',
  '& > img': {
    marginRight: 25,
  },
});

const ButtonContainer = styled('div')({
  marginTop: '40px',
});

const BottomButton = styled(Button)({
  backgroundColor: color.white,
  color: color.bgDarkDefault,
  width: 343,
});

const Result = () => {
  const [data, setData] = useState<IuserData[]>([]);
  const { keyword = '', page = 1, pageSize = 10 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await UserService.gerUserAllList({ keyword, page, pageSize });
      setData([...data, ...res.data]);
    };
    getData();
  }, [page]);

  const getMore = () => {
    const newPage = Number(page) + 1;
    if (keyword) {
      navigate(
        `/home/result/keyword/${keyword}/page/${newPage}/pageSize/${pageSize}`,
      );
    } else {
      navigate(`/home/result/page/${newPage}/pageSize/${pageSize}`);
    }
  };

  return (
    <Container>
      <Search
        variant="h5"
        onClick={() => {
          navigate('/home');
        }}
      >
        <img src={back} alt="back" />
        Results
      </Search>
      <div
        style={{
          height: data.length > 0 ? 'calc(100vh - 260px)' : 0,
          width: data.length > 0 ? '740px' : 0,
        }}
      >
        {data.length > 0 && <ResultList count={data.length} data={data} />}
      </div>
      <ButtonContainer>
        <BottomButton onClick={() => getMore()}>MORE</BottomButton>
      </ButtonContainer>
    </Container>
  );
};
export default Result;
