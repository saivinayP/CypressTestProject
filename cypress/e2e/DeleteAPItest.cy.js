/// <reference types = "Cypress" />
describe('Delete test suite', () => {
    it('deletecheck testcase', () => {
        cy.request('DELETE', 'https://chercher.tech/sample/api/product/delete')
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    })
})
