describe('sauce demo cart flows', () => {
    beforeEach(() => {
        cy.login()
    })
    //test1 error with no data
    it('try to checkout without any items added to cart', () => {
        // click cart
        cy.get('.shopping_cart_link').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // click checkout
        cy.get('[data-test="checkout"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-one.html')
        // click continue and validate error
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    })


    //test2 successful shopping flow
    it('add item to cart and successfully checkout', () => {
        // validate cart badge doesn't exist
        cy.get('.shopping_cart_badge').should('not.exist')
        // add backpack to cart from inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        // validate cart badge displays 1
        cy.get('.shopping_cart_badge').should('exist')
        cy.get('.shopping_cart_badge').should('contain', '1')
        // go to cart
        cy.get('.shopping_cart_link').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // validate item is in cart
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('.cart_quantity').should('contain', '1')
        cy.get('.inventory_item_price').should('have.text', '$29.99')
        // validate remove, continue, checkout buttons display
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
        cy.get('[data-test="continue-shopping"]').should('exist')
        cy.get('[data-test="checkout"]').should('exist')
        // checkout
        cy.get('[data-test="checkout"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-one.html')
        // populate first name
        cy.get('[data-test="firstName"]').type('Shah')
        // populate last name
        cy.get('[data-test="lastName"]').type('La')
        // populate zip
        cy.get('[data-test="postalCode"]').click()
        cy.get('[data-test="postalCode"]').type('12440')
        // click continue
        cy.get('[data-test="continue"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-two.html')
        // validate item is in order
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('.cart_quantity').should('contain', '1')
        cy.get('.inventory_item_price').should('have.text', '$29.99')
        // click finish
        cy.get('[data-test="finish"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html')
        // validate confirmation page (header and back home button)
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
        cy.get('[data-test="back-to-products"]').should('exist')
        // click back home button, validate you return to inventory page and cart is empty
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
        cy.get('shopping_cart_badge').should('not.exist')
    })

    //test3 remove item
    it('add shirt and remove item from cart and validate bag is empty', () => {
        // add shirt to cart from inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        // validate cart badge displays 1
        cy.get('.shopping_cart_badge').should('exist')
        cy.get('.shopping_cart_badge').should('contain', '1')
        // navigate to cart and remove item
        cy.get('.shopping_cart_link').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        // validate bag is empty
        cy.get('.shopping_cart_badge').should('not.exist')
    })

    //test4 continue shopping
    it('add an item and validate continue shopping flow', () => {
        // add bike light to cart from inventory page
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        // navigate to cart 
        cy.get('.shopping_cart_link').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // click continue shopping button to return to inventory page
        cy.get('[data-test="continue-shopping"]').click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
        // validate cart badge displays 1
        cy.get('.shopping_cart_badge').should('exist')
        cy.get('.shopping_cart_badge').should('contain', '1')
    })
})

