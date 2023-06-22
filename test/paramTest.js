
const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');
const ltCapabilities = require("../capabilities");
const should = require("chai").should();


describe('add todo test', function(){
  const USERNAME = ltCapabilities.capabilities['LT:Options'].username;
  const KEY = ltCapabilities.capabilities['LT:Options'].accessKey;
  const GRID_HOST = "@hub.lambdatest.com/wd/hub";

  const gridUrl = "https://"+ USERNAME+":"+KEY+GRID_HOST;

  browsers = [
    {browser: "Chrome", bVersion:"114.0", os: "Windows 11"},
    {browser: "Chrome", bVersion:"114.0", os: "Windows 10"},
    {browser: "Firefox", bVersion:"114.0", os: "Windows 11"},
    {browser: "Firefox", bVersion:"114.0", os: "Windows 10"},
    {browser: "MicrosoftEdge", bVersion:"112.0", os: "Windows 11"},
    {browser: "MicrosoftEdge", bVersion:"112.0", os: "Windows 10"}
  
  ];

  browsers.forEach(({browser,bVersion,os}) => {




  it("succesfully adds a todo to application with diferent browsers "+browser+", "+ bVersion+", "+ os, async function(){
  //  let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try{
        console.log(browser+ " " + bVersion + " " + os);    
        ltCapabilities.capabilities['LT:Options'].name = this.test.title;

        ltCapabilities.capabilities['LT:Options'].platformName = os;
        ltCapabilities.capabilities.browserName = browser;
        ltCapabilities.capabilities.browserVersion = bVersion;

        driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build();
        await driver.get('https://www.google.com/');
    }finally{
        driver.quit();
    }

   

     

  })
});
})
