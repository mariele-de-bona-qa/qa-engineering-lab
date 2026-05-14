describe('API Intercept', () => {

  it('should validate products API response', () => {

    cy.intercept('GET', '/api/products')
      .as('getProducts')

    cy.visit('https://example.com')

    cy.wait('@getProducts')
      .its('response.statusCode')
      .should('eq', 200)
  })

})
