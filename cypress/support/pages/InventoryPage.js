class InventoryPage {
    static addToCartByIndex(index) {
        cy.get('.inventory_item').eq(index).find('button').click();
    }

    static openCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default InventoryPage;