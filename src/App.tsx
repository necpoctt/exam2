import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import DesktopNavBar from './layout/desktop/NavBar';
import MobileInitContainer from './layout/mobile/InitContainer';

const Home = lazy(
  () =>
    import(/* webpackPrefetch: true */ /* webpackChunkName: "Home" */ './home'),
);

const Tags = lazy(
  () =>
    import(/* webpackPrefetch: true */ /* webpackChunkName: "Tags" */ './tags'),
);

const WaitingComponent = (Component: any) => (
  <Suspense fallback={<div>loading</div>}>
    <Component />
  </Suspense>
);

const App = () => {
  const isDesktop = useMediaQuery('(min-width:900px)', { noSsr: true });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isDesktop ? <DesktopNavBar /> : <MobileInitContainer />}
        >
          <Route path="home/*" element={WaitingComponent(Home)} />
          <Route path="tags" element={WaitingComponent(Tags)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
