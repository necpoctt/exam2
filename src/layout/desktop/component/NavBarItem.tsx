import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { color } from '../../../common/color';

import IconCard from '../../../assets/icons/IconCard';

const Item = styled('a')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: color.white,
  textDecoration: 'none',
  cursor: 'pointer',
  '& > span': {
    height: 20,
  },
});

const CssBadge = styled(Badge)({
  '& .MuiBadge-anchorOriginTopRightRectangular': {
    backgroundColor: 'rgba(0, 209, 255, 1)',
  },
});

const Title = styled('span')({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '12px',
  lineHeight: '150%',
});

interface INavBarItem {
  onClick: Function;
  title: string;
  isSelected?: boolean;
  isShowBadge?: boolean;
}

const NavBarItem = ({
  onClick,
  title,
  isSelected,
  isShowBadge,
}: INavBarItem) => {
  const [isHover, setIsHover] = useState(false);
  const defaultIconColor = '#6A6A6A';

  const isHoverOrSelected = isHover || isSelected;
  return (
    <Item
      onClick={() => onClick()}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {isShowBadge ? (
        <CssBadge badgeContent=" " variant="dot">
          <IconCard
            color={isHoverOrSelected ? color.white : defaultIconColor}
          />
        </CssBadge>
      ) : (
        <IconCard color={isHoverOrSelected ? color.white : defaultIconColor} />
      )}
      <Title>{isHoverOrSelected ? title : ''}</Title>
    </Item>
  );
};
export default NavBarItem;
