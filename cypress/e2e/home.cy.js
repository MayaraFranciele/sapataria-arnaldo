describe('Testes na Home', () => {
  it('Abre a página', () => {
    cy.visit('/')
  })
  it('Abre a página Index', () => {
    cy.visit('/index.html')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Rodapé', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('adress > :nth-child(1)').should('be.visible');
    cy.get('adress > :nth-child(2)').should('be.visible');
    cy.get('adress > :nth-child(3)').should('be.visible');
    cy.get('adress > :nth-child(4)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})