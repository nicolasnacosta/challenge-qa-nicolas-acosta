import BasePage from "./BasePage";
const userNameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const errorMessage = '[data-test="error"]';
const errorMessageContainer = '.error-message-container';

class LoginPage extends BasePage {
  visit() {
    super.visit('/');
  }
  fillUsername(username) {
    super.type(userNameInput, username);
  }
  fillPassword(password) {
    super.type(passwordInput, password);
  }
  clickLoginButton() {
    super.click(loginButton);
  }
  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton();
  }
  getErrorMessage() {
    return cy.get(errorMessage);
  }
}

export default LoginPage;