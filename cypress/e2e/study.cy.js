/// <reference types="cypress"/>

describe('Aprendendo conceitos do cypress', () => {

    it ('Acessando a homepage do Autmation Exercise', ()=> {
        cy.visit('https://automationexercise.com/');
        cy.contains('Automation');
        cy.get('h1');// acessando a tag
        cy.get('h1').contains('Automation');

        cy.get('.features_items'); //verificar se a seção 'features_items'existe na páginia incial
        //or
        cy.get('div.features_items');
    });
    it('Verificando itens para compra', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.features_items');
        cy.get('.features_items').children().first();////acessando o primeiro elemento filho do item
        cy.get('.features_items').children().last();//acessando o ultimo elemento filho do item
        cy.get('.features_items').children().eq(2);//acessando o array
    });

    it('1-Login com username e senha incorretos', () => {
        cy.visit('/')
        cy.get('div.shop-menu').contains('Login').click();
        cy.get('div.login-form').find('input[name="email"]').type('teste@email.com');
        cy.get('div.login-form').find('input[name="password"]').type('123456');
        

    })
})