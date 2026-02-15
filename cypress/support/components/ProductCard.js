const inventoryItemName = '.inventory_item_name';

class ProductCard {
  getProductItem(productName) {
    return cy.get(inventoryItemName).contains(productName);
  }
  selectProduct(productName) {
    cy.get(inventoryItemName).contains(productName).click();
  }
  addProductToCart(productId) {
    cy.get(`[data-test="add-to-cart-${productId}"]`).click();
  }
  removeProductFromCart(productId) {
    cy.get(`[data-test="remove-${productId}"]`).click();
  }
  getAddToCartButton(productId) {
    return cy.get(`[data-test="add-to-cart-${productId}"]`);
  }
  getRemoveButton(productId) {
    return cy.get(`[data-test="remove-${productId}"]`);
  }
}

export default ProductCard;