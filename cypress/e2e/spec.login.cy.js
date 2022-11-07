describe('challenge-4 test cases', () => {

    // test case 1 (check page title and headliner)
    it('test1 opens sauce demo site and checks page title', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.title().should('eq', 'Swag Labs')
    })
})