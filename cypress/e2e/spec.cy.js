describe('w&c headline', () => {
  it('opens w&c site and checks headline', () => {
    cy.visit('https://work.co/')
    cy.get('data-test-id="header-title').should('have.text', 'We design and ship digital products that transform companies.')
  })
})