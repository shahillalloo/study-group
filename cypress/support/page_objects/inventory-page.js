export class InventoryPage {

    open() {
        cy.visit('/inventory.html')
    }

    get shoppingCart() { return cy.get('.shopping_cart_link'); }
    get shoppingCartBadge() { return cy.get('.shopping_cart_badge'); }
    
    get sauceLabsBackpack() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get sauceLabsBikeLight() { return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'); }
    get sauceLabsTee() { return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'); }
    get menuBtn() { return cy.get('#react-burger-menu-btn'); }
    get logoutLink() { return cy.get('#logout_sidebar_link'); }
}

export default new InventoryPage()