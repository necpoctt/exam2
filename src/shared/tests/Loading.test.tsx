import { render } from '@testing-library/react';
import Loading from '../Loading';

test('renders Loading', () => {
  render(<Loading />);
  const ele = document.querySelector('svg');
  expect(ele).toBeInTheDocument();
});
