import { render } from '@testing-library/react';
import TextField from '../TextField';

test('renders TextField', () => {
  render(<TextField />);
  const ele = document.querySelector('div.MuiInputBase-root');
  expect(ele).toBeInTheDocument();
});
