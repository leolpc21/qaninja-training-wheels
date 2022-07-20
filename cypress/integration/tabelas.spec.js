/// <reference types="Cypress" />

//Aula - https://app.qacademy.io/area/produto/item/153704

it('Deve exibir 7 séries no total', function () {
  cy.visit('/tables');

  cy.get('table tbody tr')
    .then(function (series) {
      expect(series).to.have.length(7)
    })
});

it('Deve exibir a série Loki', function () {
  cy.visit('/tables');

  cy.contains('table tbody tr', 'Loki')
    .then(function (item) {
      expect(item).to.contain('Marvel')
      expect(item).to.contain('Disney+')
      expect(item).to.contain('2021')
    })
})

it('Deve remover a série round 6', function () {
  cy.visit('/tables');

  cy.contains('table tbody tr', 'Round 6')
    .then(function (item) {
      item.find('.delete')
        .trigger('click')
    })
    .should('not.exist')

  cy.get('table tbody tr')
    .then(function (series) {
      expect(series).to.have.length(6)
    })
});

it('deve exibir os dados de cada filme da lista', function () {
  cy.visit('/tables')

  const movies = [
    { nome: 'Loki', produtora: 'Marvel', streaming: 'Disney+', ano: '2021' },
    { nome: 'The Witcher', produtora: 'Netflix', streaming: 'Netflix', ano: '2019' },
    { nome: 'Supernatural', produtora: 'Warner Bros', streaming: 'PrimeVideo', ano: '2005' },
    { nome: 'Round 6', produtora: 'Siren Pictures', streaming: 'Netflix', ano: '2021' },
    { nome: 'O Mandaloriano', produtora: 'Lucasfilm', streaming: 'Disney+', ano: '2019' },
    { nome: 'Cobra Kai', produtora: 'Netflix', streaming: 'Netflix', ano: '2018' },
    { nome: 'What If', produtora: 'Marvel', streaming: 'Disney+', ano: '2021' }
  ]

  movies.forEach(function (movie) {
    cy.contains('table tbody tr', movie.nome)
      .then(function (item) {
        expect(item).to.contain(movie.produtora)
        expect(item).to.contain(movie.streaming)
        expect(item).to.contain(movie.ano)
      })
  })
})