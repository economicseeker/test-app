import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  // Test 1: Initial render
  test('renders initial count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('Count: 0');
  });

  // Test 2: Increment functionality
  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const countElement = screen.getByTestId('count');
    
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');
  });

  // Test 3: Decrement functionality
  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const countElement = screen.getByTestId('count');
    
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: -1');
  });

  // Test 4: Multiple interactions
  test('handles multiple increment and decrement clicks', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
    const countElement = screen.getByTestId('count');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    
    expect(countElement).toHaveTextContent('Count: 1');
  });
}); 