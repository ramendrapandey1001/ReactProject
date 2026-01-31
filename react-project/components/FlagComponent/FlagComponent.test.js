import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlagComponent from './FlagComponent';

describe('<FlagComponent />', () => {
  test('should mount', () => {
    render(<FlagComponent />);

    const flagComponent = screen.getByTestId('FlagComponent');

    expect(flagComponent).toBeInTheDocument();
  });
});