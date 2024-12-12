import { Given, When, Then } from "@cucumber/cucumber";
import CartPage from "../../tests/pages/CartPage";
import { page } from "../../src/corelib/baseSteps";

let cartPage: CartPage;

Given("I click on the shopping cart icon", async function () {
    cartPage = new CartPage(page);
    await cartPage.clickCartButton();
});