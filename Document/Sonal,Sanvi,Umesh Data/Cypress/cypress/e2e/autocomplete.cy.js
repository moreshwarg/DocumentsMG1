////<reference types="Cypress"/>

describe("auto complete selections", () => {
    it('assert auto selection', () => {
        // visit the app
        cy.visit('https://www.webdriveruniversity.com/')
        // click on the auto suggetion field
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('[name="food-item"]').type('c')

        // .each() method -- used to iterate the matched set of elements
        cy.get('#myInputautocomplete-list div').each((foodItem) => {
            //.text() method -- used to grab the text of matched element
            if (foodItem.text() === 'Chips') {
                // .wrap() -- used to give sence to script that this is cypress code
                cy.wrap(foodItem).click()
                // foodItem.click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Chips')
            }
        })

    })

})