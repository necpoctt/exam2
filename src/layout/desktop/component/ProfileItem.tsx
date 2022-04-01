import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import color from '../../../common/color';
import Button from '../../../shared/Button';
import Loading from '../../../shared/Loading';

const Name = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '150%',
  color: color.white,
});

const UserName = styled(Typography)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '150%',
  letterSpacing: '0.25px',
  color: '#FFFFFF',
  opacity: 0.5,
});

const NameContainer = styled('div')({
  flex: '1 1 0%',
  textAlign: 'left',
});

const FollowButton = styled(Button)({
  height: 28,
  flex: '0 0 60px',
  textAlign: 'right',
  marginRight: 16,
});

const FollowingButton = styled(Button)({
  height: 28,
  flex: '0 0 76px',
  textAlign: 'right',
  marginRight: 16,
});

const ImgContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: 40,
  height: 40,
  marginRight: 15,
  marginLeft: 10,
  '& > img': {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: 'transparent',
    border: '1px solid #F8F8F8',
    boxSizing: 'border-box',
    borderRadius: '5px',
  },
});

const RowContainer = styled('div')({
  width: '100%',
  justifyContent: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
});

interface IProfileData {
  isItemLoaded: Function;
  data: IuserData[];
}

interface IProfileItem {
  index: number;
  style: any;
  data: IProfileData;
}

const ProfileItem = ({ data, index, style }: IProfileItem) => {
  const { data: list, isItemLoaded } = data;

  const rowData = list[index];

  if (!isItemLoaded(index)) {
    return (
      <div style={{ ...style, height: 28 }}>
        <Loading />
      </div>
    );
  }

  return (
    <RowContainer style={style}>
      <ImgContainer>
        <img alt={rowData?.name} src={rowData?.avater} />
      </ImgContainer>
      <NameContainer>
        <Name variant="h6">{rowData?.name}</Name>
        <UserName>{rowData?.username}</UserName>
      </NameContainer>

      {rowData?.isFollowing ? (
        <FollowingButton variant="contained">Following</FollowingButton>
      ) : (
        <FollowButton variant="outlined">Follow</FollowButton>
      )}
    </RowContainer>
  );
};
export default ProfileItem;
