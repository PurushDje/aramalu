import {Given,When,Then} from '@cucumber/cucumber'
import{chromium,Browser,Page, expect} from'@playwright/test'
import { pageFixture } from '../../hooks/pageFixture';


// This is just a commentaire
Given('the user navigates to the application',async function() {
   // await pageFixture.page.goto("https://www.demoblaze.com/");
    await pageFixture.page.goto(process.env.BASEURL);
    pageFixture.logger.info("User navigated to the application");
});

Given('user click on the login link', async function () {
    // 
    await pageFixture.page.locator('#login2').click();
    
  });
 
Given('user enters the username as {string}', async function (username) {
  await pageFixture.page.locator('#loginusername').fill(username);   
  });

Given('user enters the passzord as {string}', async function (password) {    
  await pageFixture.page.locator('#loginpassword').fill(password);
  });

When('user click on the login button', async function () {
  await pageFixture.page.locator('(//button[@class="btn btn-primary"])[3]').click();    
  });
  

Then('the login is successful', async function () {
    const logintext =  await pageFixture.page.locator('//a[contains(text(),"Welcome purushtest")]').textContent();
    await expect(logintext).toContain('purushtest')
    console.log("Login is successful :"+logintext); 
    await pageFixture.page.waitForLoadState();
  });