class Login {
    userLogin(userName,password){
        cy.get('loginFrm_loginname').type(userName);
        cy.get('#loginFrm_password').type(password);

        cy.get('[type="submit"][title="Login"]').click();
    }

checkErrorMsgBlank(){
    return cy.get('.alert.alert-error.alert-danger')
}
}

export default Login