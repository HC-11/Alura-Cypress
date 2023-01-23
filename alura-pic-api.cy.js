describe('Buscar fotos e dados',() => {
   it('Buscar as fotos do usuario de teste Flavio', ()=> {
      cy.request({
        method: 'GET',
        url: 'https://apialurapic.herokuapp.com/flavio/photos',
      }) //Escrevendo a resposta da requisicao
      .then((res) => {  //O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida
         expect(res.status).to.be.equal(200) 
         expect(res.body).is.not.empty
         expect(res.body[0]).to.have.property('description')
         expect(res.body[0].description).to.be.equal('Farol iluminado')
      })
   })

   
   it.only('Logging in do usuario de teste Flavio', ()=> {
      cy.request({
         method: 'POST',
         url: 'https://apialurapic.herokuapp.com/user/login',
         body: Cypress.env()
      }) //Escrevendo a resposta da requisicao
      .then((res) => {
         expect(res.status).to.be.equal(200) 
         expect(res.body).is.not.empty
         expect(res.body).to.have.property('id')
         expect(res.body.id).to.be.equal(1)
         expect(res.body).to.have.property('email')
         expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
      })
   })
})