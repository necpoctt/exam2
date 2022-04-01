import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SyntheticEvent, useEffect, useState } from 'react';
import color from '../../common/color';
import UserService from '../../service/UserService';
import ProfileList from './component/ProfileList';
import Loading from '../../shared/Loading';

const Container = styled('div')({
  width: 375,
  backgroundColor: color.bgDarkLight,
});

const CssTabs = styled(Tabs)({
  marginTop: '28px',
  '& .MuiTabs-indicator': {
    backgroundColor: color.white,
    bottom: '2px',
  },
});

const CssTab = styled(Tab)({
  width: 187,
  color: 'rgba(146, 146, 146, 1)',
  textTransform: 'none',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '150%',
  textAlign: 'center',
  letterSpacing: '0.15px',
  '&:hover': {
    color: color.white,
  },
  '&.Mui-selected': {
    color: color.white,
  },
});

const List = styled('div')({
  marginTop: 26,
  width: '100%',
  height: 'calc(100vh - 110px)',
});

const tabs = [
  {
    key: 'all',
    name: 'Followers',
  },
  {
    key: 'following',
    name: 'Following',
  },
];

const Profile = () => {
  const [data, setData] = useState<IuserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [page, setPage] = useState(1);
  const [tabValue, setTabValue] = useState('all');
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const pageSize = 10;

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    setPage(1);
    const initData = async () => {
      let res;
      setIsLoading(true);
      if (tabValue === 'following') {
        res = await UserService.gerUserFriendList({ page, pageSize });
      } else {
        res = await UserService.gerUserAllList({ page, pageSize });
      }
      setData(res.data);
      setIsLoading(false);
      setHasNextPage(res.data.length === pageSize);
    };
    initData();
  }, [tabValue]);

  const getMore = () => {
    const newPage = Number(page) + 1;
    setPage(newPage);

    const getMoreData = async () => {
      let res;
      if (tabValue === 'following') {
        res = await UserService.gerUserFriendList({ page: newPage, pageSize });
      } else {
        res = await UserService.gerUserAllList({ page: newPage, pageSize });
      }
      setData([...data, ...res.data]);
      setHasNextPage(res.data.length === pageSize);
    };
    getMoreData();
  };

  return (
    <Container>
      <CssTabs value={tabValue} onChange={handleChange}>
        {tabs.map(d => (
          <CssTab key={d.key} label={d.name} value={d.key} />
        ))}
      </CssTabs>

      <List>
        {isLoading ? (
          <Loading />
        ) : (
          data.length > 0 && (
            <ProfileList
              count={data.length}
              data={data}
              getMore={getMore}
              hasNextPage={hasNextPage}
            />
          )
        )}
      </List>
    </Container>
  );
};

export default Profile;
