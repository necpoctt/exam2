import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/images/svg/back.svg';
import color from '../../common/color';
import TagService from '../../service/TagService';
import TagsItem from './component/TagsItem';

const Container = styled('div')({
  padding: '25px 18px 0px 20px',
  '& > h5': {
    color: color.white,
  },
});

const Back = styled('div')({
  position: 'fixed',
  width: '100%',
  zIndex: 2,
  backgroundColor: color.bgDark,
  top: 0,
  left: 0,
  paddingTop: 23,
  paddingLeft: 20,
  '& > h5': {
    display: 'flex',
    color: color.white,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    '& > img': {
      marginRight: 14,
    },
  },
});

const List = styled('div')({
  gridTemplateColumns: 'repeat(2, 1fr)',
  display: 'grid',
  gap: 12,
});

const Title = styled(Typography)({
  marginTop: '70px',
  marginBottom: '27px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
  letterSpacing: '0.25px',
});

const Tags = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const [data, setData] = useState<ItagData[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await TagService.gerTags();
      setIsLoading(false);
      setData(res);
    };
    getData();
  }, []);

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
      <Title variant="h5">Tags</Title>
      {isLoading ? (
        <TagsItem isLoading />
      ) : (
        <List>
          {data.map((d: ItagData) => (
            <TagsItem key={d.id} data={d} />
          ))}
        </List>
      )}
    </Container>
  );
};
export default Tags;
