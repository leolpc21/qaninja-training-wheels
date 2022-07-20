/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/148496

it('Deve marcar o filme favorito da marvel', function () {
  cy.visit('/radios');

  cy.get('input[value="strange"]')
    .click()
    .should('be.checked');
});