/// <reference types="cypress"/>

describe('Cadastro',() =>{
    it('Cadastro realizado com sucesso',() =>{
        cy.visit('https://app.emitte.com.br/registro/');
        cy.get('#nome_usuario').type('Teste');
        cy.get('#email_usuario').type('testejoao@emitte.com.br');
        cy.get('#readTerms').click();
        cy.get('#validar_email').click();

        //segunda tela do registo 

        cy.get('#cpfCnpj').type('91091737000112');
        cy.get('#whatsapp').click();
        cy.get('#razaoSocial').type('teste joao');
        cy.get('#nomeFantasia').type('teste fantasia');
        cy.get('#select2-tipoEmpresa-container').click();
        cy.get('.select2-results__option').contains('MEI').click();
        cy.get('#btnSalvarDadosEmpresa').click();
        cy.get('#whatsapp').type('62991224923');
        cy.get('#dadosEmpresa > .pt-4 > .btn').click();

    })
})  