
const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');

const should = require("chai").should();

describe('add another todo test', function(){
  it("succesfully adds another a todo to application", async function(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    
    try {
      await driver.get('https://www.google.com/');

     

    } finally {
     
      await driver.quit();
    }
  })

})
