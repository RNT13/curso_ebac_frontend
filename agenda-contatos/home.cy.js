/// <reference types="cypress" />

describe('testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('verifica os inputs', () => {
        cy.get('[type="text"]').should('have.length', 1)
        cy.get('[type="email"]').should('have.length', 1)
        cy.get('[type="tel"]').should('have.length', 1)
        cy.get('.adicionar').should('have.length', 1)


    })

    it('verifica a lista de contatos', () => {
        cy.get('.sc-iAEyYk > :nth-child(2)').should('have.length', 1)
        cy.get('.sc-iAEyYk > :nth-child(3)').should('have.length', 1)
        cy.get('.sc-iAEyYk > :nth-child(4)').should('have.length', 1)
    })
})