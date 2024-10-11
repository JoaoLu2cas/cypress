
//funcionalidades
///<reference types="cypress"/>
describe('Login', () => {
  it ('Login com sucesso', () => {
    //DADO
    //acessar a tela de login
    cy.visit('https://automationpratice.com.br/login')

    //digitiar o email
    cy.get('#user').type('edu@qazando.com')

    //digite a senha
    cy.get('#password').type('123456')

    //QUANDO

    //clicar no botão de login
    cy.get('#btnLogin').click()

    //Então
    cy.get('#swal2-title').should('have.text',"Login realizado")
    //validar que o login foi realizado
    



  })
  it ('Login com email vazio', () => {

    cy.visit('https://automationpratice.com.br/login')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text',"E-mail inválido.")
  
    
  })
  it ('Login com senha vazia', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('edu@qazando.com')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text',"Senha inválida.")
  })
  it ('Login com email inválido', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('edu@qazando')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get()
  })
  }
)