it('Reporter Test', () => {
    cy.log('login check')
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    cy.log('login check ends')
})