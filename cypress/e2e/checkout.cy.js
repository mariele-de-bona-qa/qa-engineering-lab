describe('Checkout Flow', () => {

  it('should complete checkout successfully', () => {

    cy.visit('https://example.com')

    cy.get('[data-testid=product-card]')
      .first()
      .click()

    cy.get('[data-testid=add-cart]')
      .click()

    cy.get('[data-testid=cart]')
      .click()

    cy.get('[data-testid=checkout-button]')
      .click()

    cy.get('[data-testid=finish-order]')
      .click()

    cy.contains('Order completed')
      .should('be.visible')
  })

})
