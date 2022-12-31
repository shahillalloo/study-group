export class CartPage {

open() {
    cy.visit('/cart.html')
}

get checkoutBtn() { return cy.get('[data-test="checkout"]'); }
get continueShoppingBtn() { return cy.get('[data-test="continue-shopping"]'); }

get itemName() { return cy.get('.inventory_item_name'); }
get cartQuantity() { return cy.get('.cart_quantity'); }
get itemPrice() { return cy.get('.inventory_item_price'); }

get removeBackpackBtn() { return cy.get('[data-test="remove-sauce-labs-backpack"]'); }
get removeTeeBtn() { return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'); }

get shoppingCartBadge() { return cy.get('.shopping_cart_badge'); }
}

export default new CartPage()