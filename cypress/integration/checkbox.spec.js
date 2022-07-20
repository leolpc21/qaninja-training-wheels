/// <reference types="Cypress" />

it('Deve marcar os top 5 filmes da marvel', function () {
  cy.visit('/checkboxes');

  const movies = [
    'spider',
    'strange',
    'blackpanther',
    'avengers4',
    'spider3'
  ]

  movies.forEach(function (mov) {
    cy.get(`input[name="${mov}"]`)
      .click()
      .should('be.checked');
  })
});