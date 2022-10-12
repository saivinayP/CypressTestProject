it('adds todos', () => {

    /*
        Please refer cypress\to-do-app-installation-steps.txt for to-do-app installation
    */
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="new-item"]').type('Write code{enter}').type('Write test{enter}');
    cy.get(':nth-child(1) > [style="flex: 2 1 0%;"]').click();
    cy.get(':nth-child(1) > [style="flex: 2 1 0%;"]').should('contain','Write');
    
})
