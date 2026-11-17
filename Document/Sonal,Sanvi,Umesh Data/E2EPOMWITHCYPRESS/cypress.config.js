const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    
    },
    baseUrl:"https://automationteststore.com/",
    env:{
userName:"Moreshwar",
password:"Gayke@123"
    },
    retries:{
      openMode:1,
      runMode:1
    },
    watchForFileChanges:false,
    experimentalRunAllSpecs:true
  },
});
