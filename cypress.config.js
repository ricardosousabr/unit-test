const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cy1g1g",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
