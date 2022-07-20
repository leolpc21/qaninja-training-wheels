/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/153551

it('Deve exibir uma notificação toast mais rápido', function () {
  cy.visit('/toaster')

  cy.contains('button', 'Toast Rápido').click()
  cy.get('body') //exibe o corpo do html do momento que o toast aparece
  cy.get('.notification')
    .should('be.visible')
    .should('have.text', 'Essa notificação é muito rápida!')
});

it('Deve exibir uma notificação toast mais lento', function () {
  cy.visit('/toaster')

  cy.contains('button', 'Toast Lento').click()
  cy.get('.notification')
    .should('be.visible')
    .should('have.text', 'Essa notificação é mais fácil para testar!')
});