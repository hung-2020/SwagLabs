import { expect } from "@playwright/test";
import * as locatorLib from "../../src/locators/locatorLibrary.json";
import { DataTable } from "@cucumber/cucumber";
import { Page } from "playwright";

export default class CartPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickCartButton() {
        await this.page.locator(locatorLib.shoppingCartButton.locator).click();
        await this.page.waitForTimeout(1000);
    }
}