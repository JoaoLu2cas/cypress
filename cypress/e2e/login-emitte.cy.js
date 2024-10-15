/// <reference types="cypress"/>

describe('Login',() =>{

    it('Login com sucesso',() => {
        //DADO
        //Acessar a tela de login
        cy.visit('https://app.emitte.com.br/emitte/login/')
        //digite o email
        cy.get('#email').type('teste@emissorfacil.com.br')
        //digite a senha
        cy.get('#senha').type('senha')
        //QUANDO
        //click para entrar
        cy.get('#buscar_ie').click()
        //ENTAO
        //verifica se encontrou
        cy.url('https://app-v2.emitte.com.br/dashboard',{ timeout: 30000 }).should('include', '/dashboard')
    }) 
    it('Login com email inválido',() =>{
        cy.visit('https://app.emitte.com.br/emitte/login/')
        cy.get('#email').type('13885290000140@emissorfacil.com.b')
        cy.get('#senha').type('EmitteIOB2023!')
        cy.get('#buscar_ie').click()
        cy.get('.lead').should('have.text',"Email ou Senha Inválidos")
    })

})