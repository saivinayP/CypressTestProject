//import { it } from "mocha"
/// <reference types="cypress"/>
//building stub
it('handles ES6 features', () => {
    cy.visit('https://google.com')
    cy.get('.FPdoLc > center > .RNmpXc').debug()
    const o = {
        // @ts-ignore
        name: cy.stub().returns('Joe')
    }
    const proxy = new Proxy(o, {
        get(target, method) {
            return target.name
        }
    })
    // @ts-ignore
    expect(proxy.whatever()).to.equal('Joe')
    expect(o.name).to.have.been.calledOnce
    const obj = {
        foo() { },
    }
    const stub = cy.stub(obj, 'foo').as('foo').returns('foo')

    obj.foo()
    expect(stub).to.be.called
    //expect(stub).to.equal('foo')
})