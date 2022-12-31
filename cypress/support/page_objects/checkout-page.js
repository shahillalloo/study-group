export class CheckoutPage {

    open() {
        cy.visit('/checkout-step-one.html')
    }

    get continueBtn() { return cy.get('[data-test="continue"]'); }
    get errorAlert() { return cy.get('[data-test="error"]'); }
    get shoppingCartBadge() { return cy.get('.shopping_cart_badge'); }

    get firstName() { return cy.get('[data-test="firstName"]'); }
    get lastName() { return cy.get('[data-test="lastName"]'); }
    get postalCode() { return cy.get('[data-test="postalCode"]'); }
    
    get itemName() { return cy.get('.inventory_item_name'); }
    get cartQuantity() { return cy.get('.cart_quantity'); }
    get itemPrice() { return cy.get('.inventory_item_price'); }
    
    get finishBtn() { return cy.get('[data-test="finish"]'); }
    get completeHeader() { return cy.get('.complete-header'); }
    get backBtn() { return cy.get('[data-test="back-to-products"]'); }
}

export default new CheckoutPage()