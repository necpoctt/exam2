import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import back from '../../assets/images/svg/back.svg';
import UserService from '../../service/UserService';
import ResultList from './component/ResultList';
import color from '../../common/color';

const Container = styled('div')({
  padding: '25px 20px 0px 20px',
  width: '100%',
  '& > h5': {
    color: color.white,
  },
});

const Back = styled('div')({
  position: 'fixed',
  width: '100%',
  zIndex: 2,
  backgroundColor: color.bgDarkDefault,
  top: 0,
  left: 0,
  paddingTop: 25,
  paddingLeft: 20,
  '& > h5': {
    display: 'flex',
    color: color.white,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    '& > img': {
      marginRight: 25,
    },
  },
});

const Title = styled(Typography)({
  marginTop: '64px',
  marginBottom: '20px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
});

const Result = () => {
  const [data, setData] = useState<IuserData[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const { keyword = '', page = 1, pageSize = 10 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await UserService.gerUserAllList({ keyword, page, pageSize });
      setHasNextPage(res.data.length === Number(pageSize));
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
      <Back>
        <Typography
          variant="h5"
          onClick={() => {
            navigate('/home');
          }}
        >
          <img src={back} alt="back" />
          Home Page
        </Typography>
      </Back>
      <Title variant="h5">Result</Title>
      <div
        style={{
          height: 'calc(100vh - 144px)',
          width: '100%',
        }}
      >
        {data.length > 0 && (
          <ResultList
            count={data.length}
            data={data}
            getMore={getMore}
            hasNextPage={hasNextPage}
          />
        )}
      </div>
    </Container>
  );
};
export default Result;
