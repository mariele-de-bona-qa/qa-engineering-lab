describe('Flaky Test Example', () => {
  it('should login using fixed wait', () => {
    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')

    cy.wait(5000)

    cy.get('[data-test=login-button]').click()

    cy.url().should('include', '/inventory.html')
  })
})
