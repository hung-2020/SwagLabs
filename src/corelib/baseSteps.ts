import { Before, After, setDefaultTimeout, BeforeAll, AfterAll, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox } from "playwright";
import dotenv, { config } from "dotenv";

let browser: Browser;
let browserContext: BrowserContext;
let page: Page;

setDefaultTimeout(300 * 1000);

BeforeAll(async function () {
    dotenv.config({
        path: `${process.cwd()}/config/.env.${process.env.env}`,
    });
    const headless = process.env.headless === "true";

    switch (process.env.browser) {
        case "chrome":
        case "gc":
            browser = await chromium.launch({ headless: headless, channel: "chrome", args: ["--start-maximized"] });
            break;
        case "firefox":
        case "ff":
            browser = await firefox.launch({ headless: headless, args: ["--start-maximized"] });
            break;

        case "edge":
        case "msedge":
            browser = await chromium.launch({ headless: headless, channel: "msedge", args: ["--start-maximized"] });
            break;
        default:
            throw new Error("Invalid browser type");
    }
});

Before(async function (scenario) {
    console.log("Started:", scenario.pickle.name);
    browserContext = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    page = await browserContext.newPage();
    page.setViewportSize({
        width: 1920, height: 1080,
    });
});


AfterStep(async function (scenario) {

    if (process.env.allscreenshots?.toLocaleLowerCase() == "on") {
        const img = await page.screenshot({
            path: `reports/${scenario.pickle.name}.png`,
        });
        this.attach(img, "image/png");
    }
});
    
After(async function (scenario) {
    
    if (scenario.result?.status == "FAILED") {
    
        const img = await page.screenshot({
        
            path: `.reports/${scenario.pickle.name}.png`,
        });
        
        this.attach(img, "image/png");
    }
    console.log("Finished:", scenario.pickle.name, scenario.result?.status);
    await page.close();
    await browserContext.close();
});
    
AfterAll(async function () {
    await browser.close();
});

export { page, browserContext };

