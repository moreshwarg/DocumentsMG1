/// <reference types="cypress"/>

const url = 'https://simple-books-api.glitch.me'

describe("multiple api requests with post and get methods", () => {
    let token
    it('api client, order a book, get details validations', () => {
        cy.request({
            method: 'POST',
            url: `${url}/api-clients/`,
            body: {
                clientName: Math.random().toString().substring(7),
                clientEmail: Math.random().toString().substring(7) + "@example.com"
            }
        }).then((apiResponse) => {
            token = apiResponse.body.accessToken
            cy.log(token)
            expect(apiResponse.status).to.equal(201)
            cy.request({
                method: 'POST',
                url: `${url}/orders`,
                headers: {
                    authorization: "Bearer " + token
                },
                body: {
                    bookId: 1,
                    customerName: "Velocity"
                }
            }).then((orderResponse) => {
                expect(orderResponse.status).to.equal(201)
                let bookOrderId = orderResponse.body.orderId
                expect(orderResponse.body.created).to.be.true
                cy.request({
                    method: 'GET',
                    url: `${url}/orders/${bookOrderId}`,
                    headers: {
                        authorization: "Bearer " + token
                    }
                }).then((getResp)=>{
                    expect(getResp.status).to.equal(200)
                    expect(getResp.body.customerName).contain('Velocity')
                })
            })
        })
    })
})