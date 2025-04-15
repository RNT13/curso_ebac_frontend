/// <reference types="cypress" />

describe('testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('adiciona um contato na agenda', () => {
        cy.get('[type="text"]').type('Renato')
        cy.get('[type="tel"]').type('98545458')
        cy.get('[type="email"]').type('renatornt@test.com')
        cy.get('.adicionar').click()

        cy.get('.sc-eDDNvR > :nth-child(1)').contains('Renato')
        cy.get('.sc-eDDNvR > :nth-child(2)').contains('98545458')
        cy.get('.sc-eDDNvR > :nth-child(3)').contains('renatornt@test.com')

    })

    it('edita contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('conteudo@editado')
        cy.get('[type="email"]').clear().type('conteudo@editado')
        cy.get('[type="tel"]').clear().type('conteudo@editado')
        cy.get('.alterar').click()

        cy.get('.sc-eDDNvR > :nth-child(1)').contains('conteudo@editado')
        cy.get('.sc-eDDNvR > :nth-child(2)').contains('conteudo@editado')
        cy.get('.sc-eDDNvR > :nth-child(3)').contains('conteudo@editado')
    })

    it('verifica se há contatos e deleta todos', () => {
        cy.get('.sc-beqWaB')
            .find('.delete')
            .each(($el, index, $list) => {
                if ($list.length > 0) {
                    cy.wrap($el).click()
                }
            })

        cy.get('h2').should('contain', '0')
        cy.get('.sc-beqWaB').should('not.exist')
    })
})
