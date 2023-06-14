describe('Testes da Navbar', () => {
  
  beforeEach(() => {
    cy.visit('/index.html');
    cy.viewport(600, 750)

  });

  it('Testa se as classes estão corretas', () =>  {
    cy.visit('/index.html')
      cy.get('nav').should('have.class', 'navbar');

  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve ter o href correspondente', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('[data-test=index]').should('have.attr', 'href', 'index.html');
    cy.get('[data-test=sobre-nos]').should('have.attr', 'href', 'sobre-nos.html');
    cy.get('[data-test=catalogo]').should('have.attr', 'href', 'catalogo.html');
    cy.get('[data-test=contato]').should('have.attr', 'href', 'contato.html');
    /* ==== End Cypress Studio ==== */
  });
  after(() => {
    cy.log('Fim dos testes Navbar');
  })
});