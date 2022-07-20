/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/149257

it('Exemplo de timeout', function () {
  cy.visit('/timeout');

  cy.contains('button', 'Habilita').click()
  cy.get('#firstname')
    .should('be.visible')
    .type('Leonardo', { timeout: 10000 })
});