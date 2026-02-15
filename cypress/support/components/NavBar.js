const shoppingCartBadge = '[data-test="shopping-cart-badge"]';
const shoppingCartLink = '[data-test="shopping-cart-link"]';

class NavBar {
  getCartBadge() {
    return cy.get(shoppingCartBadge);
  }
  openShoppingCart() {
    cy.get(shoppingCartLink).click();
  }
}

export default NavBar;