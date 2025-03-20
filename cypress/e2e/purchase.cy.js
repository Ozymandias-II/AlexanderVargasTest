import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";
import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage";
import { getUniqueRandomInts } from "../support/utils";

describe('Purchase Flow on SauceDemo', () => {
    it('It should complete a successful purchase', () => {
        cy.visit(Cypress.env('saucedemo').baseUrl);
        LoginPage.login('standard_user', 'secret_sauce');

        const [num1, num2] = getUniqueRandomInts(0, 5);
        InventoryPage.addToCartByIndex(num1);
        InventoryPage.addToCartByIndex(num2);
        InventoryPage.openCart();

        CartPage.goToCheckout();

        CheckoutPage.fillUserInfo('John', 'Doe', '172021');
        CheckoutPage.continue();

        CheckoutPage.finishPurchase();
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
});