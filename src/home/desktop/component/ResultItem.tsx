import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import color from '../../../common/color';

const ImgItem = styled('div')({
  '& > img': {
    marginBottom: 12,
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

interface IResultList {
  data: IuserData[];
  style: any;
  columnIndex: number;
  rowIndex: number;
}

const ResultItem = ({ data, columnIndex, rowIndex, style }: IResultList) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dataIndex = columnIndex + rowIndex * 3;

  const rowData = data[dataIndex];

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const newStyle = {
    ...style,
    left: style.left + columnIndex * 34,
  };

  return (
    <>
      {isLoading && rowData && (
        <Skeleton
          style={{ ...newStyle, height: newStyle.height - 82 }}
          animation="wave"
          variant="circular"
          sx={{
            backgroundColor: 'rgb(27, 27, 27)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '10px',
            backgroundImage: 'none',
            boxShadow: 'rgb(0 0 0 / 30%) 4px 4px 20px',
          }}
          width={219}
        />
      )}

      {rowData && (
        <ImgItem style={newStyle}>
          <img
            src={rowData?.avater}
            alt={rowData.name}
            onLoad={handleImageLoaded}
            width={219}
            height={146}
          />
          <p>{rowData.name}</p>
          <span>{rowData.username}</span>
        </ImgItem>
      )}
    </>
  );
};
export default ResultItem;
