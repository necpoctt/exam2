import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import color from '../common/color';

const CssSilder = styled(Slider)({
  color: 'unset',
  '& .MuiSlider-markLabel': {
    color: color.white,
  },
  '& .MuiSlider-rail': {
    color: color.white,
    height: 8,
  },
  '& .MuiSlider-mark': {
    backgroundColor: 'unset',
  },
  '& .MuiSlider-track': {
    height: 8,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
  },
  '& .MuiSlider-thumb': {
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
  },
  '& .MuiSlider-thumb:after': {
    backgroundColor: color.bgDarkDefault,
    width: 12,
    height: 12,
  },
});

const Silder = (props: any) => <CssSilder {...props} />;

export default Silder;
