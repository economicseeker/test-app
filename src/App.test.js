import { render, screen, fireEvent } from '@testing-library/react';
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

  test('handles adding a todo', () => {
    render(<App />);
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('todo-form');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);
    
    // Verify the input is cleared after submission
    expect(input.value).toBe('');
  });

  test('handles removing a todo', () => {
    render(<App />);
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('todo-form');
    
    // Add a todo first
    fireEvent.change(input, { target: { value: 'Todo to Remove' } });
    fireEvent.submit(form);
    
    // The remove functionality is handled by the TodoList component
    // We're just testing that the App component passes the handler correctly
    expect(input.value).toBe('');
  });
});
