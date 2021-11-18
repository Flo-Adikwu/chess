import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
beforeEach(() => { });

describe("Test App component", () => {
  test('renders chessboard', () => {
    render(<App />);
    const title = screen.getByText(/My Chess Game ♘/i);
    expect(title).toBeInTheDocument();
  });
});
