import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../tests/pages/LoginPage";
import { page } from "../../src/corelib/baseSteps";

let loginPage: LoginPage;

Given("I have logged into Swag Labs", async function () {
    loginPage = new LoginPage(page);
    await loginPage.login();
});