module.exports = {
  reporters: [
    "default",
    ["jest-html-reporter", {
      pageTitle: "Test Report",
      outputPath: "./test-report/index.html",
      includeFailureMsg: true,
      includeSuiteFailure: true,
      styleOverridePath: null,
      useCssFile: true,
      sort: "status"
    }]
  ],
  testResultsProcessor: "./node_modules/jest-html-reporter",
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom"
}; 