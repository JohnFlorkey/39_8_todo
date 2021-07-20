import { render } from '@testing-library/react';
import Todo from './Todo';

// smoke test
it("should render without error", () => {
    render(<Todo />);
})

// snapshot test
it("should match snapshot", () => {
    const {asFragment} = render(<Todo task="test task"/>)
    expect(asFragment()).toMatchSnapshot();
})