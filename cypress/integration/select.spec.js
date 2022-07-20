/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/148502

it('Selecionar bucky por id', function () {
  cy.visit('/select');

  cy.get('#avengerList')
    .select('Bucky')
    .should('have.value', '2')
});

it('Selecionar Tony Stark sem ser pelo id', function () {
  cy.visit('/select');

  cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value', '3')
});