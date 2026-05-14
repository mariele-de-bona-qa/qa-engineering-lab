describe('Login Flow', () => {

  beforeEach(() => {
    cy.visit('https://example.com/login')
  })

  it('should login successfully with valid credentials', () => {

    cy.get('[data-testid=email]')
      .type('qa@test.com')

    cy.get('[data-testid=password]')
      .type('123456')

    cy.get('[data-testid=login-button]')
      .click()

    cy.url().should('include', '/dashboard')

    cy.contains('Dashboard')
      .should('be.visible')
  })

  it('should display error with invalid credentials', () => {

    cy.get('[data-testid=email]')
      .type('invalid@test.com')

    cy.get('[data-testid=password]')
      .type('wrongpassword')

    cy.get('[data-testid=login-button]')
      .click()

    cy.contains('Invalid credentials')
      .should('be.visible')
  })

})
