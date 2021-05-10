/// <reference types="cypress" />

describe('Logout', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Logout', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Wyloguj').click()
        cy.location().should((loc) => {
            expect(loc.pathname.toString()).to.contain('/login');
        });

    })
})