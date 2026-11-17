///<reference types="cypress"/>

describe("mouse actions", ()=>{
    it('drag and drop',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr', 'target').click()

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})

        cy.get('#droppable b').should('include.text', 'Dropped!')

        cy.get('#droppable p').should('have.css', 'background-color', 'rgb(244, 89, 80)')
    })

    it('double click',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr', 'target').click()
        cy.contains('Double Click').dblclick()
        //cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.css', 'background-color', 'rgb(147, 203, 90)')
    })

    it.only('hidden elements',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr', 'target').click()
        cy.get('.dropdown-content').eq(0).invoke('show').should('be.visible').click()
        // cy.get('.list-alert').eq(0).click({force: true})
        // cy.contains('Link1').invoke('show').click()
    })
})