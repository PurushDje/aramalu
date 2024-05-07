import { LaunchOptions, chromium, firefox, webkit } from "playwright";

const options:LaunchOptions = {
    headless:false,
}

export const invokeBrowser = ()=>{
    console.log("This is the browser :" +process.env.BROWSER);
    const browserType = process.env.BROWSER;
    //const browserType = "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);             
            
        case "firefox":
            return firefox.launch(options);            
            
        case "webkit":
            return webkit.launch(options);         
           
        default:
            throw new Error("Set proper browser. Something went wrong");
            
    }
}