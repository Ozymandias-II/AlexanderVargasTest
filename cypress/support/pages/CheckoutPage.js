class CheckoutPage {
    static fillUserInfo(firstName, lastName, zipCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(zipCode);
    }

    static continue() {
        cy.get('#continue').click();
    }

    static finishPurchase() {
        cy.get('#finish').click();
    }
}

export default CheckoutPage;