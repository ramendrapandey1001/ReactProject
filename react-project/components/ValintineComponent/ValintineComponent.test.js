import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ValintineComponent from './ValintineComponent';

describe('<ValintineComponent />', () => {
  test('should mount', () => {
    render(<ValintineComponent />);

    const valintineComponent = screen.getByTestId('ValintineComponent');

    expect(valintineComponent).toBeInTheDocument();
  });
});