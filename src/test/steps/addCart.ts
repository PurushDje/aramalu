import {Then,When} from "@cucumber/cucumber";
import {Locator} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";


Then('the user search product', async function () {
    //await pageFixture.page.goto("https://www.demoblaze.com/");
    await pageFixture.page.waitForLoadState();
    //await pageFixture.page.waitForTimeout(10000);
    await pageFixture.page.locator('//*[@id="tbodyid"]/div[1]/div/a/img').click();
    //*[@id="tbodyid"]/div[1]/div/a/img          
});

When('the user add the product to cart', async function () {
    await pageFixture.page.locator('//*[@id="tbodyid"]/div[2]/div/a').click(); 
    //*[@id="tbodyid"]/div[2]/div/a 
    pageFixture.page.on('dialog',async dialog=>{
        await dialog.accept();
    })
         
});

Then('the number is updated in the cart', async function () {

await pageFixture.page.locator('//a[contains(text(),"Cart")]').click();
await pageFixture.page.waitForLoadState();
const textCart = await pageFixture.page.locator('//td[text()="Samsung galaxy s6"]').textContent();
console.log("Product added is :"+textCart); 
       
});