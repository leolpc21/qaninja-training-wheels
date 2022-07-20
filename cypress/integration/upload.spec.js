/// <reference types="Cypress" />

it('Deve fazer o upload da minha imagem', function () {
  cy.visit('/upload');

  const imageFile = 'cypress/fixtures/ImagemJPG.jpg'

  cy.get('input[name="file"]').selectFile(imageFile, { force: true })
  cy.get('input[value="Upload"]').click()
  cy.get('img[src="/uploads/ImagemJPG.jpg"]', { timeout: 7000 }).should('be.visible')
});