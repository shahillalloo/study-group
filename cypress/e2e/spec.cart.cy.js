import LandingPage from "../support/page_objects/landing-page.js"
import InventoryPage from "../support/page_objects/inventory-page"
import CheckoutPage from "../support/page_objects/checkout-page"
import CartPage from "../support/page_objects/cart-page"

describe('sauce demo cart flows', () => {
    beforeEach(() => {
        LandingPage.open();
        LandingPage.login('standard_user', 'secret_sauce')
    })

    it('try to checkout without any items added to cart', () => {
        // click cart
        InventoryPage.shoppingCart.click();
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')
        // click checkout
        CartPage.checkoutBtn.click();
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-one.html')
        // click continue and validate error
        CheckoutPage.continueBtn.click()
        CheckoutPage.errorAlert.should('have.text', 'Error: First Name is required')
    })

    it('add item to cart and successfully checkout', () => {
        // validate cart badge doesn't exist
        InventoryPage.shoppingCartBadge.should('not.exist')
        // add backpack to cart from inventory page
        InventoryPage.sauceLabsBackpack.click()
        // validate cart badge displays 1
        InventoryPage.shoppingCartBadge.should('exist')
        InventoryPage.shoppingCartBadge.should('contain', '1')
        // go to cart
        InventoryPage.shoppingCart.click()
        // validate item is in cart
        CartPage.itemName.should('have.text', 'Sauce Labs Backpack')
        CartPage.cartQuantity.should('contain', '1')
        CartPage.itemPrice.should('have.text', '$29.99')
        // validate remove, continue, checkout buttons display
        CartPage.removeBackpackBtn.should('exist')
        CartPage.continueShoppingBtn.should('exist')
        CartPage.checkoutBtn.should('exist')
        // checkout
        CartPage.checkoutBtn.click()
        // populate first name
        CheckoutPage.firstName.type('Shah')
        // populate last name
        CheckoutPage.lastName.type('La')
        // populate zip
        CheckoutPage.postalCode.type('12440')
        // click continue
        CheckoutPage.continueBtn.click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-step-two.html')
        // validate item is in order
        CheckoutPage.itemName.should('have.text', 'Sauce Labs Backpack')
        CheckoutPage.cartQuantity.should('contain', '1')
        CheckoutPage.itemPrice.should('have.text', '$29.99')
        // click finish
        CheckoutPage.finishBtn.click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html')
        // validate confirmation page (header and back home button)
        CheckoutPage.completeHeader.should('contain', 'THANK YOU FOR YOUR ORDER')
        CheckoutPage.backBtn.should('exist')
        // click back home button, validate you return to inventory page and cart is empty
        CheckoutPage.backBtn.click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
        CheckoutPage.shoppingCartBadge.should('not.exist')
    })

    it('add shirt and remove item from cart and validate bag is empty', () => {
        // add shirt to cart from inventory page
        InventoryPage.sauceLabsTee.click()
        // validate cart badge displays 1
        InventoryPage.shoppingCartBadge.should('exist')
        InventoryPage.shoppingCartBadge.should('contain', '1')
        // navigate to cart and remove item
        InventoryPage.shoppingCart.click()
        CartPage.removeTeeBtn.click()
        // validate bag is empty
        CartPage.shoppingCartBadge.should('not.exist')
    })

    it('add an item and validate continue shopping flow', () => {
        // add bike light to cart from inventory page
        InventoryPage.sauceLabsBikeLight.click()
        // navigate to cart 
        InventoryPage.shoppingCart.click()
        // click continue shopping button to return to inventory page
        CartPage.continueShoppingBtn.click()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
        // validate cart badge displays 1
        InventoryPage.shoppingCartBadge.should('exist')
        InventoryPage.shoppingCartBadge.should('contain', '1')
    })
})

