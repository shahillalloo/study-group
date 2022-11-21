describe('challenge 5 test case 1', () => {
    before(() => {
        cy.login()
    })
    it('test1 error with no data', () => {
        // click cart
        cy.get('[class="shopping_cart_link"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // click checkout
        cy.get('[data-test="checkout"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-one.html')
        // click continue and validate error
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    })
})

describe('challenge 5 test case 2', () => {
    before(() => {
        cy.login()
    })
    it('test2 successful shopping flow', () => {
        // validate cart badge doesn't exist
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
        // add backpack to cart from inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        // validate cart badge displays 1
        cy.get('[class="shopping_cart_badge"]').should('exist')
        cy.get('[class="shopping_cart_badge"]').should('contain', '1')
        // go to cart
        cy.get('[class="shopping_cart_link"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // validate item is in cart
        cy.get('[class="inventory_item_name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('[class="cart_quantity"]').should('contain', '1')
        cy.get('[class="inventory_item_price"]').should('have.text', '$29.99')
        // validate remove, continue, checkout buttons display
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
        cy.get('[data-test="continue-shopping"]').should('exist')
        cy.get('[data-test="checkout"]').should('exist')
        // checkout
        cy.get('[data-test="checkout"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-one.html')
        // populate first name
        cy.get('[data-test="firstName"]').click()
        cy.get('[data-test="firstName"]').type('Shah')
        // populate last name
        cy.get('[data-test="lastName"]').click()
        cy.get('[data-test="lastName"]').type('La')
        // populate zip
        cy.get('[data-test="postalCode"]').click()
        cy.get('[data-test="postalCode"]').type('12440')
        // click continue
        cy.get('[data-test="continue"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-two.html')
        // validate item is in order
        cy.get('[class="inventory_item_name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('[class="cart_quantity"]').should('contain', '1')
        cy.get('[class="inventory_item_price"]').should('have.text', '$29.99')
        // click finish
        cy.get('[data-test="finish"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html')
        // validate confirmation page (header and back home button)
        cy.get('[class="complete-header"]').should('contain', 'THANK YOU FOR YOUR ORDER')
        cy.get('[data-test="back-to-products"]').should('exist')
        // click back home button, validate you return to inventory page and cart is empty
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
    })
})

describe('challenge 5 test case 3', () => {
    before(() => {
        cy.login()
    })
    it('test3 remove item', () => {
        // add shirt to cart from inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        // validate cart badge displays 1
        cy.get('[class="shopping_cart_badge"]').should('exist')
        cy.get('[class="shopping_cart_badge"]').should('contain', '1')
        // navigate to cart and remove item
        cy.get('[class="shopping_cart_link"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        // validate bag is empty
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
    })
})
describe('challenge 5 test case 4', () => {
    before(() => {
        cy.login()
    })
    it('test4 continue shopping', () => {
        // add bike light to cart from inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        // validate cart badge displays 1
        cy.get('[class="shopping_cart_badge"]').should('exist')
        cy.get('[class="shopping_cart_badge"]').should('contain', '1')
        // navigate to cart 
        cy.get('[class="shopping_cart_link"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // click continue shopping button to return to inventory page
        cy.get('[data-test="continue-shopping"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    })
})

