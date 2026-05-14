class CheckoutPage {

  addProductToCart() {
    cy.get('.inventory_item')
      .first()
      .click()

    cy.get('[data-test=add-to-cart-sauce-labs-backpack]')
      .click()
  }

  finishCheckout() {
    cy.get('[data-test=shopping-cart-link]')
      .click()

    cy.get('[data-test=checkout]')
      .click()
  }

}

export default new CheckoutPage()
