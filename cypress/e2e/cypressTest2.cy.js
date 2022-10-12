// <reference types="cypress"/>
describe('Test to type some text in to web search box', () => {
    it('Simple google url test', function () {
        cy.visit('https://google.com')
        cy.get('.gLFyf').type('Automation test in simple steps{enter}')
    })
}) 