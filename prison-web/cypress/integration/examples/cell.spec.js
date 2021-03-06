/// <reference types="cypress" />

describe('Cell', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('AddCell', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Lista Cel').click()
        cy.contains('Dodaj cele').click()
        cy.get('.cell-number')
            .type('129')
            .should('have.value', '1129')
        cy.get('.beds-count')
            .should('have.value', '1')
        cy.contains('Utwórz cele').click()
    })

    it('EditCell', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Lista Cel').click()
        cy.contains('1129')
            .parent('tr')
            .within(() => {
                // all searches are automatically rooted to the found tr element
                cy.get('td').eq(4).contains('Edytuj').click()
            })

    })

    it('DeleteCell', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Lista Cel').click()
        cy.contains('1129')
            .parent('tr')
            .within(() => {
                // all searches are automatically rooted to the found tr element
                cy.get('td').eq(1).contains('1')
                cy.get('td').eq(2).contains('0')
                cy.get('td').eq(3).contains('Cela')
                cy.get('td').eq(4).contains('Usuń').click()
            })

    })
})