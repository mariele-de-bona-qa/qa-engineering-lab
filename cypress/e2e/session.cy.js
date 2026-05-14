describe('Session Validation', () => {

  it('should redirect after session expiration', () => {

    cy.visit('https://example.com/dashboard')

    cy.clearCookies()

    cy.reload()

    cy.url().should('include', '/login')
  })

})
