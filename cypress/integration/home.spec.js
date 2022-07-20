/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/148488

it('Deve exibir a home page', function () {
  cy.visit('/');
  cy.title()
    .should('eq', 'Training Wheels | QAninja');
  cy.get('ul[class=menu-list]')
    .should('be.visible');
});