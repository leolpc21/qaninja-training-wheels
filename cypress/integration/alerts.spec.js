/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/151803

it('Deve exibir uma mensagem de alerta', function () {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Alerta').click()
  cy.on('window:alert', function (result) {
    expect(result).to.equal('Isto é uma mensagem de alerta')
  })
  cy.get('#result').should('have.text', 'Você ativou um alerta JS')
});

//Aula - https://app.qacademy.io/area/produto/item/151804

it('Deve confirmar a solicitação', function () {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Confirma').click()
  cy.on('window:confirm', () => true)
  cy.get('#result').should('have.text', 'Mensagem confirmada')
});

it('Deve cancelar a solicitação', function () {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Confirma').click()
  cy.on('window:confirm', () => false)
  cy.get('#result').should('have.text', 'Mensagem não confirmada')
});

//Aula - https://app.qacademy.io/area/produto/item/151805

it('Deve exibir mensagem de boas vindas com o nome informado', function () {
  cy.visit('/javascript_alerts')

  cy.window().then(function ($win) {
    console.log($win)
    cy.stub($win, 'prompt').returns('Leo')
    cy.contains('button', 'Prompt').click()
  })

  cy.get('#result').should('have.text', 'Olá, Leo')
});