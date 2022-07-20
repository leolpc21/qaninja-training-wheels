/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/148498

describe('Drag And Drop', function () {

  before(function () {
    cy.visit('/drag_and_drop');
  })

  it('Deve arrastar o cypress para a caixinha do node e o robot para a caixinha do python', function () {

    const dataTransfer = new DataTransfer()

    cy.get('img[alt="Cypress"]').trigger('dragstart', { dataTransfer }) //dragstart pega o elemento
    cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer }) //drop solta o elemento

  });

  it('Deve arrastar o robot para a caixinha do python', function () {

    const dataTransfer = new DataTransfer()

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })
    cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })
  });

})
