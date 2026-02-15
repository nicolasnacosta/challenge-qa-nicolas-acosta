import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";

describe('Inventario', () => {

  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
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

  it('Verificar que el inventario se muestra correctamente', () => {
    inventoryPage.selectProduct(products.onesie.name);
  })
});