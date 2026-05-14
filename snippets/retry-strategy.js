describe('Retry Strategy Example', {
  retries: {
    runMode: 2,
    openMode: 0
  }
}, () => {
  it('should validate product list', () => {
    cy.visit('/products')

    cy.get('[data-test=product-card]')
      .should('have.length.greaterThan', 0)
  })
})
