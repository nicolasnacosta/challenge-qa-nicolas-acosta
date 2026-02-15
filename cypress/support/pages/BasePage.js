class BasePage {
  visit(path) {
    cy.visit(path)
  }
  click(selector) {
    cy.get(selector).click()
  }
  type(selector, text) {
    cy.get(selector).type(text)
  }
}

export default BasePage;