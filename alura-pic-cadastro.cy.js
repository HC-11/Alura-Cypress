describe('Cadastro de usuarios AluraPic', () => {
   beforeEach(()=> {
      cy.visit('/');
   })
   //Criando um caso de teste -> escrever email invalido
   it('Verificar mensagens de email invalido', () => {          
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="email"]').type('123deoliveira4');
      cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
   })

   //Criando um caso de teste -> mostrar todas as mensagens de dados requeridos
   it('Verificar mensagens de validacao', () => {          
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
     })

   //Criando um caso de teste -> senha curta
   it('Verificar mensagen de nome em minusculo', () => {   
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="password"]').type('1234567');
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
   })
   
   //Criando um caso de teste -> usuarios de um array .json
   const usuarios = require('../../fixtures/usuarios.json')
   usuarios.forEach(usuario => {
     it.only(`Registrar novo usuario' ${usuario.userName}`, () => {          
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="email"]').type(usuario.email);
      cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
      cy.get('input[formcontrolname="userName"]').type(usuario.userName);
      cy.get('input[formcontrolname="password"]').type(usuario.password);
      cy.contains('button', 'Register').click();
     }) 
 })
})