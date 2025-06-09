import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  // Snapshot test
  test('matches snapshot', () => {
    const mockAddTodo = jest.fn();
    const mockRemoveTodo = jest.fn();
    const { container } = render(
      <TodoList onAddTodo={mockAddTodo} onRemoveTodo={mockRemoveTodo} />
    );
    expect(container).toMatchSnapshot();
  });

  // Mock function tests
  test('calls onAddTodo when form is submitted with non-empty input', () => {
    const mockAddTodo = jest.fn();
    const mockRemoveTodo = jest.fn();
    
    render(<TodoList onAddTodo={mockAddTodo} onRemoveTodo={mockRemoveTodo} />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('todo-form');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);
    
    expect(mockAddTodo).toHaveBeenCalledWith('New Todo');
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
  });

  test('does not call onAddTodo when form is submitted with empty input', () => {
    const mockAddTodo = jest.fn();
    const mockRemoveTodo = jest.fn();
    
    render(<TodoList onAddTodo={mockAddTodo} onRemoveTodo={mockRemoveTodo} />);
    
    const form = screen.getByTestId('todo-form');
    fireEvent.submit(form);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });

  test('clears input after successful todo addition', () => {
    const mockAddTodo = jest.fn();
    const mockRemoveTodo = jest.fn();
    
    render(<TodoList onAddTodo={mockAddTodo} onRemoveTodo={mockRemoveTodo} />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('todo-form');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
  });
}); 