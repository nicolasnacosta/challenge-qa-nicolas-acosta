import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import ShoppingCartPage from "../support/pages/ShoppingCartPage";

describe('Carrito de compras', () => {

  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const shoppingCartPage = new ShoppingCartPage();
  let products;

  beforeEach(() => {
    loginPage.visit();
    cy.fixture('users').then((users) => {
      const { validUser } = users;
      loginPage.login(validUser.username, validUser.password);
    })
    cy.fixture('products').then((data) => {
      products = data;
    });
  })

  it('Agregar un producto al carrito', () => {
    inventoryPage.addProduct(products.onesie.id);
    inventoryPage.getRemoveButton(products.onesie.id).should('be.visible');
    inventoryPage.getCartBadge().should('be.visible')
      .and('contain', '1');
    inventoryPage.openShoppingCart();
    cy.url().should('include', '/cart');
  })

  it('Eliminar un producto del carrito', () => {
    inventoryPage.addProduct(products.backpack.id);
    inventoryPage.addProduct(products.onesie.id);
    inventoryPage.openShoppingCart();
    shoppingCartPage.removeProductFromCart(products.backpack.id);
    shoppingCartPage.getProductItem(products.backpack.name).should('not.exist');
    shoppingCartPage.getCartBadge().should('be.visible')
      .and('contain', '1');
  })

  it('Iniciar el checkout con en el carrito vacío', () => {
    inventoryPage.openShoppingCart();
    shoppingCartPage.clickCheckout();
    cy.url().should('include', '/cart');
  })
})