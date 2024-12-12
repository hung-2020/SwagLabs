import { expect } from "@playwright/test";
import * as locatorLib from "../../src/locators/locatorLibrary.json";
import { DataTable } from "@cucumber/cucumber";
import { Page } from "playwright";

export default class LoginPage {

    private page: Page;

    constructor(page: Page) {

        this.page = page;

    }

    async clickOnAddToCart(dataTable: DataTable) {
        const data = dataTable.hashes();
        for (const row of data) {
            await this.page.locator(locatorLib.addToCartButton.locator.replace("${productName}", row["Products"])).click();
        }
        await this.page.waitForTimeout(2000);
    }
}