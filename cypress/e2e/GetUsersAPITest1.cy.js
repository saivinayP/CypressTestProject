///<reference types = "cypress" />
describe('get users test suite', () => {
    it('get user test case', () => {
        cy.request({
            method: 'GET',
            url:
                'http://restapi.adequateshop.com/api/Tourist?page=2',
            /*headers : {
            'authorization' : ''
            }*/
        }).then((res) => {
            //try with some assertions
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(2)
        })
    })
}) 