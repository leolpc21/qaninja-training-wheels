/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/148489

it('Deve logar com sucesso', function () {
  cy.visit('/login');
  cy.get('#nickId').type('papitorocks');
  cy.get('#passId').type('pwd123');

  cy.get('button[type="submit"]').click();
  cy.get('h3[class^="title"]').should('have.text', 'Olá Papito, bem-vindo ao Orkut');
  //class^= == o ^ começa com
  //class*= == o * contem
  //class$= == o $ termina com
  const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
  cy.get('p[class="subheader"]').should('have.text', expectedText);

});