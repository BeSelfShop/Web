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
    cy.request({
      method: 'POST',
      url: 'https://wiezienie2021.azurewebsites.net/api/Authentication/login',
      form: false,
      body: {
        username: 'Admin',
        password: 'Admin1!',
      },
    }).then((resp) => {
      if (resp.status === 200)
        return
    })
  })
})