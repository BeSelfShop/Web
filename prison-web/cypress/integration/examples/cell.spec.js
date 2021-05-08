/// <reference types="cypress" />

describe('AddCell', () => {
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
        cy.contains('Lista Cel').click()
        cy.contains('Dodaj cele').click()
        cy.get('.cell-number')
            .type('125')
            .should('have.value', '1125')
        cy.get('.beds-count')
            .should('have.value', '1')
        cy.contains('Utwórz cele').click()

        cy.request({
            method: 'POST',
            url: 'https://wiezienie2021.azurewebsites.net/api/PCells',
            form: false,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJqdGkiOiI3NjlhNzM1ZC1mMzQzLTQ5MzMtOWEyZi1hZTI3NzMyMmQ1ZmUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcxNTIwNDEzMCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDMzMyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.KFY28nOQvSiBe0O213v_bbA4KNtk_viGAYrCFh1jw80",
            },
            body: {
                cellNumber: "1125",
                bedsCount: 1,
                idCellType: 1,
            },
        }).then((resp) => {
            if (resp.status === 200)
                return
        })
    })
})