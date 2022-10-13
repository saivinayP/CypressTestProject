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
    //2nd test case
    it.only('get user test case', () => {
        cy.request({
            method: 'GET',
            url:
                'http://restapi.adequateshop.com/api/Tourist?id=164660',
            /*headers : {
            'authorization' : ''
            }*/
        }).then((res) => {
            //try with some assertions
            expect(res.status).to.eq(200)
            expect(res.body.tourist_name).to.eq('SaiNadapana')
            expect(res.body.tourist_location).to.contains('India')
        })
    })
})
