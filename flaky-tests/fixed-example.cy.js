describe('Fixed Test Example', () => {
  it('should login without fixed wait', () => {
    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test=username]').should('be.visible').type('standard_user')
    cy.get('[data-test=password]').should('be.visible').type('secret_sauce')
    cy.get('[data-test=login-button]').should('be.enabled').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })
})
