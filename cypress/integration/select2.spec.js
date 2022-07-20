/// <reference types="Cypress" />

it('Deve selecionar uma opção', function () {
  cy.visit('/apps/select2/index.html');

  cy.get('.select2-selection--single').click()
  cy.contains('.select2-results__option', 'Selenium Webdriver').click()
});

it('Deve selecionar multiplas opções', function () {
  cy.visit('/apps/select2/index.html');

  const frameworks = [
    'Selenium Webdriver',
    'Cypress',
    'Protractor',
  ]

  frameworks.forEach(function (fram) {
    cy.get('.select2-selection--multiple').click()
    cy.contains('.select2-results__option', fram).click()
  })

  // cy.get('.select2-selection--multiple').click()
  // cy.contains('.select2-results__option', 'Selenium Webdriver').click()

  // cy.get('.select2-selection--multiple').click()
  // cy.contains('.select2-results__option', 'Cypress').click()

  // cy.get('.select2-selection--multiple').click()
  // cy.contains('.select2-results__option', 'Protractor').click()
});