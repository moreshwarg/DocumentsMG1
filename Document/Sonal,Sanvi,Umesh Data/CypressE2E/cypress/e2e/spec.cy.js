describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      // console.log(Cypress.env('uerName'))
      // console.log(Cypress.env('passWord'))
      // cy.get('.locator').type(Cypress.env('uerName'))
      // cy.get('.locator').type(Cypress.env('passWord'))
    })
    it('passes', () => {
        cy.visit('/')
        console.log(Cypress.env('uerName'))
        console.log(Cypress.env('passWord'))
        cy.get('.locator').type(Cypress.env('uerName'))
        cy.get('.locator').type(Cypress.env('passWord'))
      })
  })