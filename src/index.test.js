import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the reportWebVitals module
jest.mock('./reportWebVitals', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('Index', () => {
  test('renders App component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
}); 