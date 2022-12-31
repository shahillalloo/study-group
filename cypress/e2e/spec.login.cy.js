import LandingPage from "../support/page_objects/landing-page.js";
import InventoryPage from "../support/page_objects/inventory-page";

describe('saucedemo login test cases', () => {
  beforeEach(() => {
    LandingPage.open();
  })

  // test case 1 (check page title and headline)
  it('test1 opens sauce demo site and checks page title', () => {
    cy.title().should('eq', 'Swag Labs')
  })

  it('test2 enter email and password, check url and error', () => {
    LandingPage.login('lalloo@work.co', '12345')
    LandingPage.landingError.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('test3 login as standard user, check url', () => {
    LandingPage.login('standard_user', 'secret_sauce')
    cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
  })

  //challenge 5 - test case1 (login and logout)
  it('challenge5/test1 login as standard user, logout, check url', () => {
    LandingPage.login('standard_user', 'secret_sauce');
    InventoryPage.menuBtn.click();
    InventoryPage.logoutLink.click();
    cy.url().should('be.equal', 'https://www.saucedemo.com/')
  })
})

