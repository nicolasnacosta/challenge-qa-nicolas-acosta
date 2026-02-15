import BasePage from "./BasePage";
import ProductCard from "../components/productCard";
import NavBar from "../components/NavBar";

class InventoryPage extends BasePage {
  constructor() {
    super();
    this.productCard = new ProductCard();
    this.navBar = new NavBar();
  }
  selectProduct(productName) {
    this.productCard.selectProduct(productName);
  }
  addProduct(productId) {
    this.productCard.addProductToCart(productId);
  }
  removeProduct(productId) {
    this.productCard.removeProductFromCart(productId);
  }
  getAddToCartButton(productId) {
    return this.productCard.getAddToCartButton(productId);
  }
  getRemoveButton(productId) {
    return this.productCard.getRemoveButton(productId);
  }
  filterProducts(filterOption) {
    // TODO: Implementar la lógica para seleccionar el filtro de productos
  }

  getCartBadge() {
    return this.navBar.getCartBadge();
  }
  openShoppingCart() {
    this.navBar.openShoppingCart();
  }
}

export default InventoryPage;