const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    saucedemo: {
      baseUrl: "https://www.saucedemo.com",
    },
    petstore: {
      baseUrl: "https://petstore.swagger.io/v2",
    },
  },
});
