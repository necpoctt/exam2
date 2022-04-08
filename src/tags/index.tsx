import useMediaQuery from '@mui/material/useMediaQuery';
import { lazy } from 'react';

const DesktopTags = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "DesktopTags" */ './desktop/Tags'
    ),
);

const MobileTags = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "MobileTags" */ './mobile/Tags'
    ),
);

const Index = () => {
  const isDesktop = useMediaQuery('(min-width:900px)', { noSsr: true });

  return isDesktop ? <DesktopTags /> : <MobileTags />;
};
export default Index;
