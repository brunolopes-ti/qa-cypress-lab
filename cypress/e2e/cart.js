const {
  Given,
  When,
  Then
} = require('@badeball/cypress-cucumber-preprocessor');

Given('que estou autenticado no SauceDemo', () => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();

  cy.url().should('include', '/inventory.html');
});

When('adiciono o produto Sauce Labs Backpack ao carrinho', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Then('o carrinho deve exibir 1 item', () => {
  cy.get('.shopping_cart_badge')
    .should('be.visible')
    .and('have.text', '1');
});

Then('o produto Sauce Labs Backpack deve estar no carrinho', () => {
  cy.get('.shopping_cart_link').click();

  cy.get('.inventory_item_name')
    .should('be.visible')
    .and('have.text', 'Sauce Labs Backpack');
});

Given('que adicionei o produto Sauce Labs Backpack ao carrinho', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  cy.get('.shopping_cart_badge')
    .should('have.text', '1');
});

When('removo o produto do carrinho', () => {
  cy.get('.shopping_cart_link').click();

  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

Then('o carrinho deve ficar vazio', () => {
  cy.get('.shopping_cart_badge').should('not.exist');

  cy.get('.cart_item').should('not.exist');
});