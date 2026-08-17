const {
  Given,
  When,
  Then
} = require('@badeball/cypress-cucumber-preprocessor');

Given('que estou na página de login do SauceDemo', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('informo usuário e senha válidos', () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
});

When('informo credenciais inválidas', () => {
  cy.get('[data-test="username"]').type('usuario_invalido');
  cy.get('[data-test="password"]').type('senha_invalida');
});

When('informo as credenciais de um usuário bloqueado', () => {
  cy.get('[data-test="username"]').type('locked_out_user');
  cy.get('[data-test="password"]').type('secret_sauce');
});

When('clico no botão de login', () => {
  cy.get('[data-test="login-button"]').click();
});

Then('devo visualizar a página de produtos', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('contain', 'Products');
});

Then('devo visualizar uma mensagem de erro de credenciais inválidas', () => {
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and(
      'contain',
      'Epic sadface: Username and password do not match any user in this service'
    );
});

Then('devo visualizar uma mensagem informando que o usuário está bloqueado', () => {
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and(
      'contain',
      'Epic sadface: Sorry, this user has been locked out.'
    );
});