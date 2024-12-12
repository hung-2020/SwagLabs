import { expect } from "@playwright/test";
import * as locatorLib from "../../src/locators/locatorLibrary.json";
import { DataTable } from "@cucumber/cucumber"; 
import {Page} from "playwright";

export default class LoginPage {

    private page: Page;

    constructor (page: Page) {

        this.page = page;

    }

    async login() {
        await this.page.goto(process.env.appUrl!);
        await this.page.locator (locatorLib.usernameField.locator).fill(process.env.user_name!);
        await this.page.locator (locatorLib.passwordField.locator).fill(process.env.password!);
        await this.page.locator (locatorLib.loginButton.locator).click();
    }
}