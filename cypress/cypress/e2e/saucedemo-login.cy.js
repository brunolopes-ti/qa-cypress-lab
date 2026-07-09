describe('SauceDemo - Login', () => {
  it('Deve realizar login com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
    cy.get('.inventory_list').should('be.visible');

    cy.screenshot('login-valido-saucedemo');
  });
});