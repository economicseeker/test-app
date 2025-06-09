import reportWebVitals from './reportWebVitals';

describe('reportWebVitals', () => {
  test('should not call web-vitals when no callback is provided', () => {
    const mockImport = jest.spyOn(global, 'import');
    reportWebVitals();
    expect(mockImport).not.toHaveBeenCalled();
  });

  test('should call web-vitals when callback is provided', () => {
    const mockCallback = jest.fn();
    const mockImport = jest.spyOn(global, 'import').mockImplementation(() => 
      Promise.resolve({
        getCLS: jest.fn(),
        getFID: jest.fn(),
        getFCP: jest.fn(),
        getLCP: jest.fn(),
        getTTFB: jest.fn()
      })
    );

    reportWebVitals(mockCallback);
    expect(mockImport).toHaveBeenCalledWith('web-vitals');
  });
}); 