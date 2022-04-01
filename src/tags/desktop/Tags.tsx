import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import color from '../../common/color';
import TagService from '../../service/TagService';
import TagsItem from './component/TagsItem';

const Container = styled('div')({
  padding: '84px 240px 64px 338px',
  '& > h5': {
    color: color.white,
  },
});

const Title = styled(Typography)({
  display: 'flex',
  marginBottom: '20px',
  position: 'relative',
  cursor: 'pointer',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '30px',
  lineHeight: '150%',
});

const List = styled('div')({
  gridTemplateColumns: 'repeat(5, 1fr)',
  display: 'grid',
  gap: 12,
});

const Tags = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const [data, setData] = useState<ItagData[]>([]);

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
