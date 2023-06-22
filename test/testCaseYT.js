
const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');
const ltCapabilities = require("../capabilities");
const should = require("chai").should();


describe('add todo test', function(){
  const USERNAME = ltCapabilities.capabilities['LT:Options'].username;
  const KEY = ltCapabilities.capabilities['LT:Options'].accessKey;
  const GRID_HOST = "@hub.lambdatest.com/wd/hub";

  const gridUrl = "https://"+ USERNAME+":"+KEY+GRID_HOST;


  beforeEach(function(){
    ltCapabilities.capabilities['LT:Options'].name = this.currentTest.title;
     driver = new Builder()
     .usingServer(gridUrl)
     .withCapabilities(ltCapabilities.capabilities)
     .build();
  } );
  afterEach(async function(){
    driver.quit();
 } );

  it("succesfully adds a todo to application", async function(){
  //  let driver = await new Builder().forBrowser(Browser.CHROME).build();
    

      await driver.get('https://www.google.com/');

     

  })

})
