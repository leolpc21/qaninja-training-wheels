/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/153550

it('Deve exibir a mensagem de sucesso no popup e clicar no botão OK', function () {
  cy.visit('/sweet_alert')

  cy.contains('button', 'Sucesso').click()
  cy.get('.swal-text').should('have.text', 'Você clicou no botão verde.')
  cy.contains('button', 'OK').click()
});

it('Deve exibir a mensagem deu ruim no popup e clicar no botão OK', function () {
  cy.visit('/sweet_alert')

  cy.contains('button', 'Deu Ruim').click()
  cy.get('.swal-text').should('have.text', 'Você clicou no botão vermelho.')
  cy.contains('button', 'OK').click()
});