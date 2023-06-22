
const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');
const assert = require("assert");
const should = require("chai").should();

(async function example() {
    var testValue = 'santander';
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    
    try {
      await driver.get(' https://commerceos.staging.devpayever.com/registration/'+testValue);

      await driver.wait(until.elementLocated(By.xpath('//div/two-column-form/div/peb-form-field-input[1]/div/div/span')), 10000); 
      await driver.findElement(By.xpath('//div/two-column-form/div/peb-form-field-input[1]/div/div/span')).click();
      await driver.findElement(By.xpath('//*[@formcontrolname="firstName"]')).sendKeys('testFirstN', Key.RETURN);

      await driver.wait(until.elementLocated(By.xpath('//div/two-column-form/div/peb-form-field-input[2]/div/div/span')), 10000); 
      await driver.findElement(By.xpath('//div/two-column-form/div/peb-form-field-input[2]/div/div/span')).click();
      await driver.findElement(By.xpath('//*[@formcontrolname="lastName"]')).sendKeys('testLastN', Key.RETURN);

      await driver.wait(until.elementLocated(By.xpath('//peb-form-background/div/peb-form-field-input[1]/div')), 10000); 
      await driver.findElement(By.xpath('//peb-form-background/div/peb-form-field-input[1]/div')).click();
      await driver.findElement(By.xpath('//*[@formcontrolname="email"]')).sendKeys('cristiankmilo.cbc+036@gmail.com', Key.RETURN);

      await driver.wait(until.elementLocated(By.xpath('//peb-form-background/div/peb-form-field-input[2]/div')), 10000); 
      await driver.findElement(By.xpath('//peb-form-background/div/peb-form-field-input[2]/div')).click();
      await driver.findElement(By.xpath('//*[@formcontrolname="password"]')).sendKeys('Holatest123$', Key.RETURN);

      await driver.wait(until.elementLocated(By.xpath('//peb-form-background/div/peb-form-field-input[3]/div')), 10000); 
      await driver.findElement(By.xpath('//peb-form-background/div/peb-form-field-input[3]/div')).click();
      await driver.findElement(By.xpath('//*[@formcontrolname="confirmPass"]')).sendKeys('Holatest123$', Key.RETURN);
      // second path

      await driver.wait(until.elementLocated(By.xpath('//div/pe-select-business-status')), 10000); 
      await driver.findElement(By.xpath('//div/pe-select-business-status')).click();
      await driver.findElement(By.xpath('//div/div/peb-select-option/span[contains(text(),"'+' Solo Entrepreneur '+'")]')).click();

      await driver.wait(until.elementLocated(By.xpath('//peb-form-background/div/peb-form-field-input[1]/div')), 10000); 
      await driver.findElement(By.xpath('//peb-form-background/div/peb-form-field-input[1]/div')).click();
      await driver.findElement(By.xpath('//div/peb-form-field-input[1]/div/div/div/input')).sendKeys('testCompany', Key.RETURN);

      await driver.wait(until.elementLocated(By.xpath('//div/pe-select-status/peb-select/div')), 10000); 
      await driver.findElement(By.xpath('//div/pe-select-status/peb-select/div')).click();
      await driver.findElement(By.xpath('//div/div/peb-select-option/span[contains(text(),"'+' Growing an existing business '+'")]')).click();

      await driver.wait(until.elementLocated(By.xpath('//peb-form-background/div/pe-select-sales/peb-select/div')), 10000); 
      await driver.findElement(By.xpath('//peb-form-background/div/pe-select-sales/peb-select/div')).click();
      await driver.findElement(By.xpath('//div/div/peb-select-option/span[contains(text(),"'+' 5.000 EUR to 50.000 EUR '+'")]')).click();

      var industryType = 'Others';
      await driver.wait(until.elementLocated(By.xpath('//pe-autocomplete/peb-form-field-input/div')), 10000); 
      await driver.findElement(By.xpath('//pe-autocomplete/peb-form-field-input/div')).click();
      await driver.findElement(By.xpath('//pe-autocomplete/peb-form-field-input/div/div[1]/div/input')).clear();
      await driver.findElement(By.xpath('//pe-autocomplete/peb-form-field-input/div/div[1]/div/input')).sendKeys(industryType);
                 
     
      await driver.sleep(2000);
      await driver.findElement(By.xpath('//mat-option/span/div/span[contains(text(),"'+industryType+'")]')).click();
                  

      await driver.wait(until.elementLocated(By.xpath('//pe-select-phone-code/peb-select/div')), 10000); 
      await driver.findElement(By.xpath('//pe-select-phone-code/peb-select/div')).click();
      await driver.findElement(By.xpath('//div/div/peb-select-option/span[contains(text(),"'+' +57 Colombia '+'")]')).click();
                  
      await driver.wait(until.elementLocated(By.xpath('//pe-input-phone/peb-form-field-input/div')), 10000); 
      await driver.findElement(By.xpath('//pe-input-phone/peb-form-field-input/div')).click();
      await driver.findElement(By.xpath('//pe-input-phone/peb-form-field-input/div//input')).sendKeys('3124130120');
                     
      await driver.wait(until.elementLocated(By.xpath('//peb-form-field-input[2]/div')), 10000); 
      await driver.findElement(By.xpath('//peb-form-field-input[2]/div')).click();
      await driver.findElement(By.xpath('//peb-form-field-input[2]/div//input')).sendKeys('3124130120');

      await driver.sleep(2000);
      await driver.wait(until.elementLocated(By.xpath('//*[@id="layout-container"]/div/entry-dynamic-business-registration/button')), 10000); 
      await driver.findElement(By.xpath('//*[@id="layout-container"]/div/entry-dynamic-business-registration/button')).click();

      await driver.sleep(2000);
      await driver.wait(until.elementLocated(By.xpath('//welcome-screen/div/div/button')), 10000); 
      await driver.findElement(By.xpath('//welcome-screen/div/div/button')).click();

      await driver.sleep(100);
      await driver.wait(until.elementLocated(By.xpath('//pe-widget-icons/div/div/div/div/div[2]')), 10000); 
      var elements = await driver.findElements(By.xpath('//pe-widget-icons/div/div/div/div/div[2]'));
      var apss = elements.length -1; 
      var Transactions = false;
      var Checkout = false;
      var Connect = false;
      var PointofSale = false;
      var settings = false;


      for (let i = 0; i < apss; i++) {

        if (await elements[i].getText() === 'Transactions') {
          Transactions = true;
        }
        if (await elements[i].getText() === 'Checkout') {
          Checkout = true;
        }
        if (await elements[i].getText() === 'Connect') {
          Connect = true;
        }
        if (await elements[i].getText() === 'Point of Sale') {
          PointofSale = true;
        }
        if (await elements[i].getText() === 'Settings') {
          settings = true;
        }
      }

      Transactions.should.true;
      Checkout.should.true;
      Connect.should.true;
      PointofSale.should.true;
      settings.should.true;
    



    } finally {
      await driver.quit();
    }
  })();