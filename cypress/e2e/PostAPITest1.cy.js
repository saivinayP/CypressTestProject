/// <reference types = 'Cypress'/>
describe('post user test suite', () => {
    function makeString(length) {

        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result;
    }

    let c_method = 'POST'
    let accessToken = '94aab22e7f2ae9476a2a81dd9da7e876aa333bcde3f082cd8b510573008d77d9'
    var name = makeString(12)
    var email = makeString(16) + 'gmail.com'
    //create tets case or iteration
    it('Post user test case', () => {
        cy.request({
            method: c_method,
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": 'Mansarovoor4',
                "gender": "Male",
                "email": 'test7sampleemail@gmail.com',
                "status": "active"
            }
        }).then((resp) => {
            //write required assertions
            expect(resp.status).to.eq(201)
            expect(resp.body).has.property('email', 'test7sampleemail@gmail.com')
            expect(resp.body).has.property('name', 'Mansarovoor4')

        })
    })
})
