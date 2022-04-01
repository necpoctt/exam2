import { render } from '@testing-library/react';
import Button from '../Button';

test('renders Button', () => {
  render(<Button />);
  const ele = document.querySelector('Button');
  expect(ele).toBeInTheDocument();
});

test('renders Button contained', () => {
  render(<Button variant="contained" />);
  const ele = document.querySelector('Button.MuiButton-contained');
  expect(ele).toBeInTheDocument();
});

test('renders Button outlined', () => {
  render(<Button variant="outlined" />);
  const ele = document.querySelector('Button.MuiButton-outlined');
  expect(ele).toBeInTheDocument();
});
