import BasePage from "./BasePage";
import ProductCard from "../components/productCard";
import NavBar from "../components/NavBar";

const continueShoppingButton = '[data-test="continue-shopping"]';
const checkoutButton = '[data-test="checkout"]';

class ShoppingCartPage extends BasePage {
  constructor() {
    super();
    this.productCard = new ProductCard();
    this.navBar = new NavBar();
  }
  getProductItem(productName) {
    return this.productCard.getProductItem(productName);
  }
  selectProduct(productName) {
    this.productCard.selectProduct(productName);
  }
  removeProductFromCart(productId) {
    this.productCard.removeProductFromCart(productId);
  }
  getCartBadge() {
    return this.navBar.getCartBadge();
  }
  clickContinueShopping() {
    super.click(continueShoppingButton);
  }
  clickCheckout() {
    super.click(checkoutButton);
  }
}

export default ShoppingCartPage;