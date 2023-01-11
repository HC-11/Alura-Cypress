describe('TecSinapse busca vagas na TecSinapse', () => {
  
   beforeEach(() => {   
      cy.visit('');
      cy.get('#moove_gdpr_cookie_info_bar > div > div > div.moove-gdpr-button-holder > button')
   })

   it('Buscar vagas de emprego', () => {
      cy.wait(2000);
      cy.contains('Nossas vagas').scrollIntoView();
      cy.wait(2000);
      cy.get('.row > :nth-child(3) > .btn')
   });

})

