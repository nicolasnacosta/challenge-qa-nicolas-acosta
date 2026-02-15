import LoginPage from "../support/pages/LoginPage";

describe('Inicio de sesión', () => {

  const loginPage = new LoginPage();
  let users;

  beforeEach(() => {
    loginPage.visit();
    cy.fixture('users').then((usersData) => {
      users = usersData;
    })
  })

  it('Inicio de sesión exitoso', () => {
    loginPage.login(users.validUser.username, users.validUser.password);
    cy.url().should('include', '/inventory');
  })

  it('Usuario deshabilitado', () => {
    loginPage.login(users.lockedOutUser.username, users.lockedOutUser.password);
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
  })
})