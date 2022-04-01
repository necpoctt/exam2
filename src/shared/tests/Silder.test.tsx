import { render } from '@testing-library/react';
import Silder from '../Silder';

test('renders Silder', () => {
  render(<Silder />);
  const ele = document.querySelector('span.MuiSlider-colorPrimary');
  expect(ele).toBeInTheDocument();
});
