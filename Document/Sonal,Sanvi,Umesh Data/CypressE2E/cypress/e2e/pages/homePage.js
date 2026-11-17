class Home{

    // methos to click on the login button
    clickOnLoginButton(){
        cy.get('#customer_menu_top').click()
    }
    
    // method to valdate the welcome message
    checkTheWelcomeMessage(){
        // validate the message in test script
        return cy.get('#customer_menu_top')
    }

    // method to click on the Make up tab
    clickOnMakeUpTab(){
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
            .contains('Makeup')
            .click()
    }

    // method to click on the Hair care tab
    clickOnHairCareTab(){
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
            .contains('Hair Care')
            .click()
    }

    //method to click on the Books tab
    clickOnBooksTab(){
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
            .contains('Books')
            .click()
    }
}

export default Home