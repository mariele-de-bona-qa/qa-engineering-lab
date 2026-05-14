describe('API Intercept Example', () => {
  it('should mock products API response', () => {
    cy.intercept('GET', '**/api/products', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: 'Sauce Labs Backpack'
        }
      ]
    }).as('getProducts')

    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('eq', 200)
  })
})
