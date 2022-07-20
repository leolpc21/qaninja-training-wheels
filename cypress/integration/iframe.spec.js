/// <reference types="Cypress" />

const niceIFrame = function () {
  return cy.get('#weareqaninja')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
}

const badIFrame = function () {
  return cy.get('iframe[src*="instagram"]')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
}

it('Deve validar o username no iframe bom', function () {
  cy.visit('/nice_iframe');

  niceIFrame()
    .find('.UsernameText')
    .should('have.text', 'qacademy_oficial')

});

it('Deve validar o username no iframe ruim', function () {
  cy.visit('/bad_iframe');

  badIFrame()
    .find('.UsernameText')
    .should('have.text', 'qacademy_oficial')

});