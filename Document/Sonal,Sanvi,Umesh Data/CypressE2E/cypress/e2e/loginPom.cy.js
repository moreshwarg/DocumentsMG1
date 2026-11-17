///<reference types="cypress"/>
import Home from "./pages/homePage"
import Login from "./pages/loginPage"

const login = new Login()
const home = new Home()

describe('login test validations',() => {
    beforeEach(() =>{
        cy.visit('/')
        home.clickOnLoginButton()
    })
    it('login with valid creds',()=>{
        login.userLogin(Cypress.env('userName'), Cypress.env('passWord'))
       home.checkTheWelcomeMessage().should('include.text', 'Welcome back')
    })

    it('login with invalid creds',()=>{
       login.userLogin('velo', 'velocity1')
       login.checkErrorMessageOnBlankLoginDetails().should('include.text', 'Error: Incorrect login or password provided.')
    })
})