import { Given, When, Then } from "@cucumber/cucumber";
import CheckoutPage from "../../tests/pages/CheckoutPage";
import { page } from "../../src/corelib/baseSteps";

let checkoutPage: CheckoutPage;

Given("I click on the checkout button", async function () {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickCheckOutButton();
});

Given("I enter the following details on the Checkout: Your Information page", async function (dataTable) {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterYourInformation(dataTable);
});

Given("I click on the Finish button", async function () {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickFinishButton();
});

Then("I should see the order complete header is displayed", async function () {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.completeHeaderDisplays();
});

