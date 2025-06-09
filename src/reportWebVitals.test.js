import reportWebVitals from './reportWebVitals';

// Mock the web-vitals module
jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}));

describe('reportWebVitals', () => {
  test('should not call web-vitals when no callback is provided', () => {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');
    reportWebVitals();
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });

  test('should call web-vitals when callback is provided', () => {
    const mockCallback = jest.fn();
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');
    
    reportWebVitals(mockCallback);
    
    expect(getCLS).toHaveBeenCalledWith(mockCallback);
    expect(getFID).toHaveBeenCalledWith(mockCallback);
    expect(getFCP).toHaveBeenCalledWith(mockCallback);
    expect(getLCP).toHaveBeenCalledWith(mockCallback);
    expect(getTTFB).toHaveBeenCalledWith(mockCallback);
  });
}); 