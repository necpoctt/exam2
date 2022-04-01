// eslint-disable-next-line import/no-named-default
import { default as MUITextField } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import color from '../common/color';

const CssTextField = styled(MUITextField)({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '150%',
  '& label.Mui-focused': {
    color: color.white,
  },
  '& legend': {
    maxWidth: '100%',
  },
  '& .MuiInputLabel-root': {
    color: color.white,
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
      border: '3px solid rgba(255, 255, 255, 0.5)',
    },
    '&:hover fieldset': {
      borderColor: color.white,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 155, 51, 1)',
    },
  },
});

interface ItextField {
  maxLength?: number;
  // All other props
  [x: string]: any;
}

const TextField = ({ maxLength, ...props }: ItextField) => (
  <CssTextField
    inputProps={{
      maxLength,
    }}
    {...props}
  />
);

export default TextField;
