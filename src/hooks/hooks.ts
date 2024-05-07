import{Before,After, BeforeAll, AfterAll, Status, AfterStep} from "@cucumber/cucumber";
import{chromium,firefox,Browser,Page, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";


let mybrowser: Browser;
//let mypage:Page;
let mycontext: BrowserContext

BeforeAll(async function () {
    //mybrowser=await chromium.launch({headless:false});
    getEnv();
    mybrowser=await invokeBrowser();
});

Before (async function({pickle}){
    const scenarioName = pickle.name + pickle.id;
    mycontext = await mybrowser.newContext();
    const mypage = await mycontext.newPage();
   // mypage = await mybrowser.newPage();
    pageFixture.page=mypage;
    pageFixture.logger = createLogger(options(scenarioName));
});

/*AfterStep(async function ({pickle,result}) {
    const myimg = await pageFixture.page.screenshot({path:`./test-images/screenshots/${pickle.name}.png`,type:"png"});
    await this.attach(myimg,"image/png");
})*/

After(async function ({pickle,result}) {
    console.log('Scenario Name is :'+pickle.name);
    console.log('The result is :'+result?.status)
    const myimg = await pageFixture.page.screenshot({path:`./test-images/screenshots/${pickle.name}.png`,type:"png"});
    await this.attach(myimg,"image/png");
    /*if(result?.status==Status.FAILED){
        const myimg = await pageFixture.page.screenshot({path:`./test-images/screenshots/${pickle.name}.png`,type:"png"});
        await this.attach(myimg,"image/png");
        }*/
    await pageFixture.page.close();
    await mycontext.close();
});

AfterAll (async function(){    
    await mybrowser.close();
    pageFixture.logger.close();
}); 