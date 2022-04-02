import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import color from '../../../common/color';

const HeadPaper = styled(Paper)({
  backgroundColor: 'rgba(255,255,255,0.06)',
  color: color.white,
  borderRadius: '10px',
  height: 122,
  width: 130,
  display: 'flex',
  alignItems: 'end',
  padding: '14px 12px 14px 10px',
  marginBottom: 10,
});

const PaperName = styled('div')({
  border: '4px solid #FFFFFF',
  boxSizing: 'border-box',
  borderRadius: '8px',
  padding: 4,
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '150%',
});

const Item = styled('div')({
  marginBottom: 24,
  '&  > p': {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14.9px',
    lineHeight: 1.5,
    letterSpacing: '0.139688px',
    color: color.white,
    width: 130,
  },
  '&  > span': {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '11.175px',
    lineHeight: 1.5,
    letterSpacing: '0.3725px',
    color: 'rgb(178, 178, 178)',
    width: 130,
  },
});

const TagsItem = ({ data, isLoading }: ItagItem) => (
  <Item>
    <HeadPaper elevation={0}>
      {isLoading ? (
        <Skeleton animation="wave" width={110} />
      ) : (
        <PaperName className="one-line-clamp">{data?.name}</PaperName>
      )}
    </HeadPaper>

    {isLoading ? (
      <Skeleton animation="wave" width={130} />
    ) : (
      <p className="one-line-clamp">{data?.name}</p>
    )}

    {isLoading ? (
      <Skeleton animation="wave" width={130} />
    ) : (
      <span className="one-line-clamp">{data?.count}</span>
    )}
  </Item>
);
export default TagsItem;
