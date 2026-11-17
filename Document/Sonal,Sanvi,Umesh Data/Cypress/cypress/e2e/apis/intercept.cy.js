///<reference types='cypress'/>

describe('intercept spying',() =>{
    it('spy',() =>{
        // spying the below path with intercept
        cy.intercept({
            path: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('checkComment')
        // visting app
        cy.visit('https://dummyapi.io/explorer')

        cy.get('.px-2.py-1.m-1 ').contains('Comments List').click()

        //using wait for validatin responses
        cy.wait('@checkComment').then((intercept)=>{
            expect(intercept.response.statusCode).to.eq(200)
            expect(intercept.response.body.limit).to.eq(10)
        })
    })

    it.only('spy and stub',() =>{
        // spying the below path with intercept
        cy.intercept('GET', 
        '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', 
        {limit:20, name:'velocity'}).as('changeLimit')
        // visting app
        cy.visit('https://dummyapi.io/explorer')

        cy.get('.px-2.py-1.m-1 ').contains('Comments List').click()

        //using wait for validatin responses
        cy.wait('@changeLimit').then((intercept)=>{
            expect(intercept.response.statusCode).to.eq(200)
            expect(intercept.response.body.limit).to.eq(20)
        })
    })
})