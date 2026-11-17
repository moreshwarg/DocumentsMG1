///<reference types="cypress"/>

describe("excel data read", () => {
    // use your own file path
    const filePath = 'C:/Users/Moreshwar/DataReadExcel.xlsx'
    it('use data from excel', () => {
        cy.task('excelToJson', filePath).then((readData) => {
            // visit application
            cy.visit('https://www.webdriveruniversity.com/')

            // remove target attr for page to open in same tab
            cy.get('#contact-us').invoke('removeAttr', 'target').click()

            // type the first name in the form
            cy.get('[placeholder="First Name"]').should('be.visible').type(readData.Sheet1[1].A)

            // last name
            cy.get('[name="last_name"]').should('be.empty').type(readData.Sheet1[3].B)

            //email id
            cy.get('[placeholder="Email Address"]').should('have.class', 'feedback-input').type(readData.Sheet1[1].C)

            // comment
            cy.get('.feedback-input').eq(3).type(readData.Sheet1[3].D).should('have.value', readData.Sheet1[3].D)

            // click on submint button
            cy.get('[value="SUBMIT"]').click()

            // cy.contains('Submit')
        })

    })

})