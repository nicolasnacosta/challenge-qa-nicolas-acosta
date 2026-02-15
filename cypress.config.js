const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: 'cypress-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: true,
    attachments: true 
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
