class Home {
    clickOnLoginButton(){
        cy.get('#customer_menu_top').click();

    }
validatingWelcomeMessage(){
   // validate welcome msg
    return cy.get('#customer_menu_top')
}

clickOnMakeUpTab(){
    cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
    .contains('Makeup')
    .click();
}
clickOnHaireCareTab(){
    cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
    .contains('Hair Care')
    .click();
}
clickOnBookTab(){
    cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
    .contains('Books')
    .click();
}

}
export default Home