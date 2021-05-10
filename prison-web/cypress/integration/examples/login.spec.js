/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Login', () => {
    cy.get('.log')
      .type('Admin')
      .should('have.value', 'Admin')
    cy.get('.password')
      .type('Admin1!')
      .should('have.value', 'Admin1!')
    cy.contains('Zaloguj').click()
  })
})