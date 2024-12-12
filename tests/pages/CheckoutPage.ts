import { expect } from "@playwright/test";
import * as locatorLib from "../../src/locators/locatorLibrary.json";
import { DataTable } from "@cucumber/cucumber";
import { Page } from "playwright";

export default class CheckOutPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickCheckOutButton() {
        await this.page.locator(locatorLib.checkoutButton.locator).click();
    }

    async enterYourInformation(dataTable: DataTable) {
        const data = dataTable.hashes();
        for (const row of data) {
            await this.page.locator(locatorLib.firstName.locator).fill(row["Firstname"])
            await this.page.locator(locatorLib.lastName.locator).fill(row["Lastname"])
            await this.page.locator(locatorLib.postalCode.locator).fill(row["Zip/Postal Code"])
            await this.page.waitForTimeout(1000);
            await this.page.locator(locatorLib.continueButton.locator).click();
        }

    }

    async clickFinishButton() {
        await this.page.locator(locatorLib.finishButton.locator).click();
        await this.page.waitForTimeout(1000);
    }

    async completeHeaderDisplays() {
        await expect(this.page.locator(locatorLib.completeHeader.locator)).toBeVisible();
        await this.page.waitForTimeout(1000);
    }
}