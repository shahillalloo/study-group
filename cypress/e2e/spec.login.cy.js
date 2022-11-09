describe('challenge-4 test cases', () => {

    // test case 1 (check page title and headline)
    it('test1 opens sauce demo site and checks page title', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.title().should('eq', 'Swag Labs')
    })

    it('test2 enter email and password, check url and error', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').click()
      cy.get('[data-test="username"]').type('lalloo@work.co')
      cy.get('[data-test="password"]').click()
      cy.get('[data-test="password"]').type('12345')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('be.equal', 'https://www.saucedemo.com/')
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('test3 login as standard user, check url', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').click()
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').click()
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    })
  })
    
