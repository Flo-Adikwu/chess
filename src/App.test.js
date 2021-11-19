import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
beforeEach(() => { });

jest.mock('chess.js', () => {
  return function () {
    return {
      chessLogic: () => { }
    };
  };
});

describe("Test App component", () => {
  test('renders chessboard', () => {
    render(<App />);
    const title = screen.getByText(/My Chess Game ♘/i);
    expect(title).toBeInTheDocument();
    expect(screen.getByText(/White to start/i)).toBeInTheDocument();
  });
});
