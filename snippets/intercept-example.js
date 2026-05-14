cy.intercept('GET', '/api/products', {
  statusCode: 200,
  fixture: 'products.json'
}).as('getProducts')

cy.visit('/products')

cy.wait('@getProducts')
  .its('response.statusCode')
  .should('eq', 200)
