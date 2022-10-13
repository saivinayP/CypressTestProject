/// <reference types = 'Cypress'/>
describe('post user test suite', () => {
    let c_method = 'POST'
    let accessToken = '94aab22e7f2ae9476a2a81dd9da7e876aa333bcde3f082cd8b510573008d77d9'
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var uName = ''
    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    let rstring = 'litmus12' + generateString(6) + '@gmail.com'
    console.log(generateString(5));
    //create tets case or iteration
    it('Post user test case', () => {
        cy.request({
            method: c_method,
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Mansarovoor2",
                "gender": "Male",
                "email": rstring,
                "status": "active"
            }
        }).then((resp) => {
            //write required assertions
            const userName = resp.body.id
            uName = userName
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(201)
            expect(resp.body).has.property('email', rstring)
            expect(resp.body).has.property('name', 'Mansarovoor2')

        }).then((res) => {

            // Chaining of request
            // after POST call chaining a GET call
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + uName,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
        })
    })
})
