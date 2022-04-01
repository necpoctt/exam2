import useMediaQuery from '@mui/material/useMediaQuery';
import DesktopTags from './desktop/Tags';
import MobileTags from './mobile/Tags';

const Index = () => {
  const isDesktop = useMediaQuery('(min-width:900px)', { noSsr: true });

  return isDesktop ? <DesktopTags /> : <MobileTags />;
};
export default Index;
