////<reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("testing alerts on the page",()=>{
    beforeEach(() => {
          // visit app
          cy.visit('https://www.webdriveruniversity.com/')
          // click on the alert tab
          cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
          
    })
    it("window alert validation",()=>{
      
        // click on the button for alert
        cy.get('#button1').click()

        // validating the alert message
        cy.on('window:alert',(str)=>{
            expect(str).to.include('I am an alert box!')
            //cy.log(str)
        })
    })
    

    it('window confirm OK Validation',()=>{
        // click on confirm alert
        cy.get('#button4').click()

        // validate the message on the confirm alert
        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!')
            return true
        })

        cy.get('#confirm-alert-text').should('include.text', 'You pressed OK!')

    })

    it('window confirm Cancel validation',()=>{
        // click on confirm alert
        cy.get('#button4').click()

        // validate the message on the confirm alert
        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!')
            return false
        })

        cy.get('#confirm-alert-text').should('include.text', 'You pressed Cancel!')

    })
})

