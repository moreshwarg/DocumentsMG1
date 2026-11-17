/// <reference types="cypress"/>
import Books from "./pages/booksPage"
import Home from "./pages/homePage"

const book = new Books()
const home = new Home()


describe('book selection and validation',() => {
    it('select a book to read',() => {
        cy.visit('/')
        home.clickOnBooksTab()
        book.selectBooks('Allegiant by Veronica Roth')
        cy.url().should('include', 'checkout')
    })
})