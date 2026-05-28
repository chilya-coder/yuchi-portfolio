import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Software Engineer'
  );
  expect(
    screen.getByText(/welcome to yuchi portfolio, software engineer/i)
  ).toBeInTheDocument();
});
