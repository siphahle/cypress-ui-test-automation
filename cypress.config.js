const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
    url: "https://ultimateqa.com"
  },
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
