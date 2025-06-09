const { exec } = require('child_process');
const path = require('path');

// Open coverage report
const coveragePath = path.join(__dirname, 'coverage', 'lcov-report', 'index.html');
exec(`open ${coveragePath}`, (error) => {
  if (error) {
    console.error('Error opening coverage report:', error);
  } else {
    console.log('Coverage report opened in browser');
  }
}); 