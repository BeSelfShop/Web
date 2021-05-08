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
                return resp
        })
        cy.contains('Zaproś').click()
        cy.get('.invite-employee')
            .type('mail@mail.com')
            .should('have.value', 'mail@mail.com')
        cy.contains('Zaproś').click()

        cy.request({
            method: 'POST',
            url: 'https://wiezienie2021.azurewebsites.net/api/RegisterMail/send',
            form: false,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJqdGkiOiI3NjlhNzM1ZC1mMzQzLTQ5MzMtOWEyZi1hZTI3NzMyMmQ1ZmUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcxNTIwNDEzMCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDMzMyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.KFY28nOQvSiBe0O213v_bbA4KNtk_viGAYrCFh1jw80",
            },
            body: {
                toEmail: "mail@mail.com"
            },
        }).then((resp) => {
            if (resp.status === 200)
                return
        })
    })
})