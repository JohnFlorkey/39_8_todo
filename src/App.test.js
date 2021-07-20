import { render, screen } from '@testing-library/react';
import App from './App';

// smoke test
test('renders learn react link', () => {
  render(<App />);
});

// snapshot test
it("should match snapshot", () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
