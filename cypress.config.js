const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    url: "https://ultimateqa.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      
    },
     specPattern: 'cypress/integration/examples/',
     chromeWebSecurity: false,
     testIsolation:false,
    
  },
});
