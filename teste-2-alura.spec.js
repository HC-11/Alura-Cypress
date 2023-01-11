describe('Alura busca cursos', () => {
   beforeEach(()=> {
      cy.visit('https://www.alura.com.br/');
      //Recusando aquela pergunta de cookies
      cy.get('#hs-eu-decline-button').click();
   })
   it('buscar curso de cypress', () => {           //.type('javaskript');
      cy.get('#header-barraBusca-form-campoBusca').type('javascript');
      
      cy.get('.header-barraBusca-form-submit').click()
      cy.get('h4.busca-resultado-nome')
         .should('contain', 'Curso MEAN Stack: criando aplicações completas com Javascript');
   })
})