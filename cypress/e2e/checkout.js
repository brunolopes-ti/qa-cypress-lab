const {
  Given,
  When,
  Then
} = require('@badeball/cypress-cucumber-preprocessor');

Given('que estou autenticado e possuo um produto no carrinho', () => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();

  cy.url().should('include', '/inventory.html');

  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  cy.get('.shopping_cart_badge')
    .should('be.visible')
    .and('have.text', '1');
});

When('acesso o carrinho', () => {
  cy.get('.shopping_cart_link').click();

  cy.url().should('include', '/cart.html');
});

When('inicio o checkout', () => {
  cy.get('[data-test="checkout"]').click();

  cy.url().should('include', '/checkout-step-one.html');
});

When('preencho os dados obrigatórios do cliente', () => {
  cy.get('[data-test="firstName"]').type('Bruno');
  cy.get('[data-test="lastName"]').type('Lopes');
  cy.get('[data-test="postalCode"]').type('70000-000');
});

When('avanço para a revisão do pedido', () => {
  cy.get('[data-test="continue"]').click();

  cy.url().should('include', '/checkout-step-two.html');
});

When('finalizo a compra', () => {
  cy.get('[data-test="finish"]').click();
});

Then('devo visualizar a confirmação de pedido concluído', () => {
  cy.url().should('include', '/checkout-complete.html');

  cy.get('.complete-header')
    .should('be.visible')
    .and('contain', 'Thank you for your order!');
});