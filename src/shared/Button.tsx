// eslint-disable-next-line import/no-named-default
import { default as MUIButton } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import color from '../common/color';

const CssButton = styled(MUIButton)({
  fontFamily: 'Ubuntu',
  fontSize: '14px',
  lineHeight: '100%',
  height: 40,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: color.bgDarkDefault,
    color: color.white,
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  '&.MuiButton-contained': {
    color: color.bgDarkDefault,
    backgroundColor: color.white,
    boxSizing: 'border-box',
    borderRadius: '20px',
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '100%',
  },
  '&.MuiButton-outlined': {
    color: color.white,
    backgroundColor: color.bgDarkDefault,
    border: `1px solid ${color.white}`,
    boxSizing: 'border-box',
    borderRadius: '20px',
    fontFamily: 'Bokor',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '100%',
  },
});

const Button = (props: any) => <CssButton {...props} />;

export default Button;
