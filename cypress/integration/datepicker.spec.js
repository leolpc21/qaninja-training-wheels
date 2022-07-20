/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/149252

it('Selecionar a data de nascimneto', function () {
  cy.visit('/datepicker');

  const date = {
    month: 'abr',
    year: '1988',
    day: '20'
  }

  cy.get('.datetimepicker-dummy-input').click()
  cy.get('.datepicker-nav-month').click()
  cy.contains('.datepicker-month', date.month).click()
  cy.get('.datepicker-nav-year').click()
  cy.contains('.datepicker-year span', date.year).click()
  cy.contains('button[class=date-item]', new RegExp('^' + date.day + '$', 'g'))
    .click()
});