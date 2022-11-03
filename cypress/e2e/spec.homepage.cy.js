describe('challenge-3 test cases', () => {

  // test case 1 (check page title and headliner)
  it('test1 opens w&c site and checks page title', () => {
    cy.visit('https://work.co/')
    cy.title().should('eq', 'Work & Co | Digital Product Agency')
    cy.get('[data-test-id="header-title-text"]').should('have.text', 'We design and ship digital products that transform companies.')
  })

  // test case 2 (click logo and check URL)
  it('test2 opens w&c site and click logo', () => {
    cy.visit('https://work.co/')
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.url().should('be.equal', 'https://work.co/grid/')
  })

  // test case 3 (click logo, click Select Clients and check URL)
  it('test3 Select Clients', () => {
    cy.visit('https://work.co/')
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.get('[data-test-id="grid-select-clients-link"]').click()
    cy.url().should('be.equal', 'https://work.co/clients/')
  })

  // test case 4 (click logo, click 'Practice Areas', check URL)
  it('test4 Practice Areas', () => {
    cy.visit('https://work.co/')
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.get('[data-test-id="grid-practice-areas-link"]').click()
    cy.url().should('be.equal', 'https://work.co/company/')
  })
})