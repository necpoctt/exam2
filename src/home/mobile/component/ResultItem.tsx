import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import color from '../../../common/color';
import Loading from '../../../shared/Loading';

const ImgItem = styled('div')({
  '& > img': {
    marginBottom: 21,
  },
  '&  > p': {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14.9px',
    lineHeight: 1.5,
    letterSpacing: '0.139688px',
    color: color.white,
  },
  '&  > span': {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '11.175px',
    lineHeight: 1.5,
    letterSpacing: '0.3725px',
    color: 'rgb(178, 178, 178)',
  },
});

interface IResultData {
  isItemLoaded: Function;
  data: IuserData[];
}

interface IResultItem {
  index: number;
  style: any;
  data: IResultData;
}

const ResultItem = ({ data, index, style }: IResultItem) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: list, isItemLoaded } = data;

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const userData = list[index];

  if (!isItemLoaded(index)) {
    return (
      <div style={{ ...style, height: 28 }}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <Skeleton
          style={{ ...style, height: style.height - 82 }}
          animation="wave"
          variant="circular"
          sx={{
            backgroundColor: 'rgb(27, 27, 27)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '10px',
            backgroundImage: 'none',
            boxShadow: 'rgb(0 0 0 / 30%) 4px 4px 20px',
          }}
          width={335}
        />
      )}

      <ImgItem style={style}>
        <img
          src={userData?.avater}
          alt={userData?.name}
          onLoad={handleImageLoaded}
          width={335}
          height={223}
        />
        <p>{userData?.name}</p>
        <span>{userData?.username}</span>
      </ImgItem>
    </>
  );
};
export default ResultItem;
