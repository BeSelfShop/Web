/// <reference types="cypress" />

describe('prisoner', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('get', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Lista więźniów').click()
        cy.contains('Testowy')
            .parent('tr')
            .within(() => {
                // all searches are automatically rooted to the found tr element
                cy.get('td').eq(1).contains('User')
                cy.get('td').eq(2).contains('12345')
            })

    })

    it('details', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Lista więźniów').click()
        cy.contains('Testowy')
            .parent('tr')
            .within(() => {
                // all searches are automatically rooted to the found tr element
                cy.get('td').eq(3).contains('Szczegóły').click()
            })

    })

    it('edit', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Lista więźniów').click()
        cy.contains('Testowy')
            .parent('tr')
            .within(() => {
                // all searches are automatically rooted to the found tr element
                cy.get('td').eq(3).contains('Szczegóły').click()
            })
        cy.contains('Edytuj').click()

    })
})