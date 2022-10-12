// test suite
/// <reference types="cypress"/>
describe('Tutorialspoint', function () {
    // it function to identify test
    it('Login Test Scenario 1', function () {
        // test step to launch a URL
        cy.visit("https://admin-demo.nopcommerce.com/login")
        // identify element
        cy.get('#Email').clear()
        cy.get('#Email').type('admin@yourstore.com')
        cy.get('#Password').clear()
        cy.get('#Password').type('admin')
        cy.get('.button-1').click()
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1) > .nav-icon').click()
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1) > .nav-icon').click()
        cy.get('.menu-open > :nth-child(2) > :nth-child(1) > .nav-link > .nav-icon').click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (e) {
            //method text to obtain text content
            const t = e.text()
            expect(t).to.contains('Build')
        })

    })
})
