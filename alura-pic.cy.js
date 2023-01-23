describe('Funcionalidades da homepage', () => {
   beforeEach(()=> {
      cy.visit('https://alura-fotos.herokuapp.com');
         
   })
   //Criando o primeiro caso de teste -> mostrar todas as mensagens de dados requeridos
   it('Verificar mensagens de validacao', () => {          
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
   })
   
   //Criando um segundo caso de teste -> escrever email invalido
   it('Verificar mensagens de email invalido', () => {          
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="email"]').type('123deoliveira4');
      cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
   })

   //Criando um terceiro caso de teste -> escrever nome maiuscul
   it('Verificar mensagens de senha curta', () => {   
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="userName"]').type('EUSEBIO');
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Must be lower case').should('be.visible');
   })

   //Criando um quarto caso de teste -> escrever senha invalida
   it('Verificar mensagen de nome em minusculo', () => {   
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="password"]').type('1234567');
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
   })

   it.only('Fazer login de usuario valido', ()=> {
      cy.login('flavio', '123')
      cy.contains('a', '(Logout)').should('be.visible');
   })

   it.only('Fazer login de usuario invalido', ()=> {
      cy.login('jacqueline', '1234')
      cy.on('window:alert',(str) => {
         expect(str).to.equal('Invalid user name or password')
      })
   })
})