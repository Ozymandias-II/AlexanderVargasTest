class CartPage {
    static goToCheckout() {
        cy.get('#checkout').click();
    }
}

export default CartPage;