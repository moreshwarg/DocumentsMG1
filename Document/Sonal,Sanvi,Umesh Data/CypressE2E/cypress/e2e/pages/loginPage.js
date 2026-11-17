class Login{
    userLogin(userName, passWord){
        cy.get('#loginFrm_loginname').type(userName)
        cy.get('#loginFrm_password').type(passWord)
        cy.get('[title="Login"]').click()
    }

    checkErrorMessageOnBlankLoginDetails() {
        // validate the error message in test script
        return cy.get('.alert.alert-error.alert-danger')
    }
}

export default Login