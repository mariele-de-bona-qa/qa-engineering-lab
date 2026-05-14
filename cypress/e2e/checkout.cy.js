describe('Checkout Flow', () => {
  it('should complete checkout successfully', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Mariele')
    cy.get('[data-test="lastName"]').type('De Bona')
    cy.get('[data-test="postalCode"]').type('88800-000')

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]')
      .should('contain', 'Thank you for your order!')
  })
})
