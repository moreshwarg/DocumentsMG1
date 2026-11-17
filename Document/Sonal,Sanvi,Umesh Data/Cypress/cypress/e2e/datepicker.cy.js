////<reference types="cypress"/>

describe("validting date picker",() =>{
    // 15/8/2015
    it("selecting a date",() =>{
        // visit the app
        cy.visit('https://www.webdriveruniversity.com/')
        // click on date picker tab
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        // click on date picker
        cy.get('#datepicker').click()
        // click on year selection
        cy.get('.datepicker-switch').first().click()
        // select 2015 year
        function selectYear(){
            cy.get('.datepicker-switch').first().then((yearText)=>{
                let yearName = yearText.text()
               // logic for selecting the year
                if(!yearName.includes('1992')){
                    cy.get('[class="prev"]').eq(0).click({force: true})
                    selectYear()
                }

                // if(!yearName.includes('2027')){
                //     cy.get('[class="next"]').eq(1).click({force: true})
                //     selectYear()
                // }
            })
        }

        function selectMonth(){
            cy.get('[class="month"]').contains('Feb').click({force: true})
        }

        function selectDay(){
            cy.get('[class="day"]').contains('15').click({force: true})
        }

        selectYear()
        selectMonth()
        selectDay()

    })
})