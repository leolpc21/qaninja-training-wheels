/// <reference types="Cypress" />

it('Deve marcar o filme favorito da marvel', function () {
  cy.visit('/radios');

  cy.get('input[value="strange"]')
    .click()
    .should('be.checked');
});