/// <reference types="cypress" />

describe('testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('deve levar o usuario até o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('deve preencher o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Renato')
        cy.get('input[name="email"]').type('renatornt@test.com')
        cy.get('[type="tel"]').type('98545458')
        cy.get('.Aplicacao_contato__VFz7a > [type="text"]').type('rua tralha numero nãotin')
        cy.get('select[name="escolaridade"]').select('Outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('windws:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})