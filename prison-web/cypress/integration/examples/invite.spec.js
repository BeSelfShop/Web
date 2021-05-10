/// <reference types="cypress" />

describe('Invite', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('inviteEmplyee', () => {
        cy.get('.log')
            .type('Admin')
            .should('have.value', 'Admin')
        cy.get('.password')
            .type('Admin1!')
            .should('have.value', 'Admin1!')
        cy.contains('Zaloguj').click()
        cy.contains('Zaproś').click()
        cy.get('.invite-employee')
            .type('mail@mail.com')
            .should('have.value', 'mail@mail.com')
        cy.contains('Zaproś').click()
    })
})