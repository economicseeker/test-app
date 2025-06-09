import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders Jest Testing Demo heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Jest Testing Demo/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Counter component', () => {
    render(<App />);
    const counterHeading = screen.getByText(/Counter Example/i);
    expect(counterHeading).toBeInTheDocument();
  });

  test('renders TodoList component', () => {
    render(<App />);
    const todoListHeading = screen.getByText(/Todo List/i);
    expect(todoListHeading).toBeInTheDocument();
  });
});
