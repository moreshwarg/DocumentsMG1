///<reference types="cypress"/>

describe("drop-dpwn checkboxes and radio buttons",() => {
    beforeEach(() => {
        //visiting app
        cy.visit('https://www.webdriveruniversity.com/')
        // click on the dd-cb-rb tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })
    it('drop-down',() => {
        
        //cy.go('back')

        //selecting the values from the drop-down using text
        cy.get('#dropdowm-menu-1').select('Python') // dropdown-1

        //selecting the values from the drop-down using value
        cy.get('#dropdowm-menu-2').select('maven')

        //selecting the values from the drop-down using index
        cy.get('#dropdowm-menu-3').select(3)
    })

    it("chekcboxes",() => {
        // check option 1
        cy.get('[value="option-1"]').should('not.be.checked').check()
        cy.get('[value="option-1"]').should('be.checked')
        // check option 2
        cy.get('[value="option-2"]').should('not.be.checked').check()
        cy.get('[value="option-2"]').should('be.checked')
        //validate option 3 is already checked
        cy.get('[value="option-3"]').should('be.checked')
    })

    it.only('radio buttons',()=>{
        cy.get('#radio-buttons [value="orange"]').click().should('be.checked').and('be.visible')
        cy.get('#radio-buttons [value="blue"]').click().should('be.checked')
        cy.get('#radio-buttons [value="orange"]').should('not.be.checked')
    })

})