import { Given, When, Then } from "@cucumber/cucumber";
import ProductsPage from "../../tests/pages/ProductsPage";
import { page } from "../../src/corelib/baseSteps";

let productsPage: ProductsPage;

When('I add the following products into the shopping cart', async function (dataTable) {
    productsPage = new ProductsPage(page);
    await productsPage.clickOnAddToCart(dataTable);
});