import useMediaQuery from '@mui/material/useMediaQuery';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Profile from '../layout/desktop/Profile';

const DesktopHome = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "DesktopHome" */ './desktop/Home'
    ),
);

const MobileHome = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "MobileHome" */ './mobile/Home'
    ),
);

const DesktopResult = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "DesktopResult" */ './desktop/Result'
    ),
);

const MobileResult = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "MobileResult" */ './mobile/Result'
    ),
);

const WaitingComponent = (Component: any) => (
  <Suspense fallback={<div>loading</div>}>
    <Component />
  </Suspense>
);

const Index = () => {
  const isDesktop = useMediaQuery('(min-width:900px)', { noSsr: true });
  const isMinWidth1440 = useMediaQuery('(min-width:1440px)', { noSsr: true });

  return (
    <div style={{ display: 'flex' }}>
      <Routes>
        <Route
          path="/"
          element={WaitingComponent(isDesktop ? DesktopHome : MobileHome)}
        />
        <Route
          path="/result/keyword/:keyword/page/:page/pageSize/:pageSize"
          element={WaitingComponent(isDesktop ? DesktopResult : MobileResult)}
        />
        <Route
          path="/result/page/:page/pageSize/:pageSize"
          element={WaitingComponent(isDesktop ? DesktopResult : MobileResult)}
        />
      </Routes>
      {isMinWidth1440 && <Profile />}
    </div>
  );
};
export default Index;
