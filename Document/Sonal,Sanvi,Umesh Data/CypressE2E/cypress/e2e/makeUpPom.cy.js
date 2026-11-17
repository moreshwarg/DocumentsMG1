/// <reference types ="cypress"/>
import Home from "./pages/homePage"
import Makeup from "./pages/makeUpPage"

const home = new Home()
const makeUp = new Makeup()

describe("validate the products and categories", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        home.clickOnMakeUpTab()
    })
    it('categories validation', ()=>{
        makeUp.numberOfCategories().should('have.length', 6)
    })

    it('product validation', ()=>{
        makeUp.numberOfProducts().should('have.length', 6)
    })
})