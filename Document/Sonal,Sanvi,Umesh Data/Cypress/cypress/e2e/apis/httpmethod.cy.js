/// <reference types="cypress"/>

const url = 'https://jsonplaceholder.typicode.com/'
describe("diffrent http method calls",()=>{
    it("GET http method",()=>{
        cy.request('GET', `${url}/posts`).then((getResponse)=>{
            expect(getResponse.status).eq(200)
            cy.log(getResponse)
        })
        cy.request({
            method: 'GET',
            url: `${url}/posts/10`,
            //headers: {}
        }).then((getResp)=>{
            expect(getResp.body.title).to.include('optio molestias id quia eum')
            expect(getResp.body.body).to.include('quo et expedita modi cum officia')
        })
    })
    it('Post method',()=>{
        cy.request({
            method: 'POST',
            url: `${url}/posts`,
            body: {
                userId: 15,
                title: "this is new testing title with cypress"
            }
        }).then((postResp)=>{
            expect(postResp.status).to.equal(201)
            expect(postResp.body.title).to.include('this is new testing title with cypress')
            expect(postResp.body.id).to.equal(101)
        })
    })

    it("Put methos",()=>{
        cy.request({
            method: 'PUT',
            url:`${url}/posts/2`,
            body: {
                userId: 12,
                title: "this is after Put method"
            }
        }).then((putResp)=>{
            expect(putResp.status).to.equal(200)
            expect(putResp.body.title).to.include('this is after Put method')
        })
    })
    it('delete method',()=>{
        cy.request({
            method: 'DELETE',
            url: `${url}/posts/2`,
        }).then((deleteResp)=>{
            expect(deleteResp.status).to.eq(200)
            expect(deleteResp.body).to.be.empty
        })
    })
})