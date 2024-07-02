const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k6238d',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
    url: "https://ultimateqa.com"
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      
    },
     specPattern: 'cypress/e2e/examples/',
     chromeWebSecurity: false,
     testIsolation:false,
  },
});
