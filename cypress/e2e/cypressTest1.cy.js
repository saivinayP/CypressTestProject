// type definitions for Cypress object "cy"
/// <reference types="cypress" />
describe('My First Cypress Test', () => {
    it('Visits the a any webpage', function () {
        //Visit the Google Search Home Page
        cy.visit("https://www.google.com/");
    });
})