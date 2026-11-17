////<reference types="Cypress"/>

import Home from './pages/loginPage';
import Login from './pages/homePage';

const login = new Login();
const home = new Home();


describe('login test validation',()=>{
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        login.clickOnLoginButton()
    })
    it('login with valid credentials',()=>{
//login.userLogin(Cypress.env('userName'),Cypress.env('password'))
login.userLogin('Moreshwar','Gayke@123')
home.validatingWelcomeMessage().should('include.text','Welcome back')
    })
})
