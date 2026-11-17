// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('selectNextDate', (year, month, day) => {
    function selectYear(year){
        cy.get('.datepicker-switch').first().then((yearText)=>{
            let yearName = yearText.text()
            //logic for selecting the year
            // if(!yearName.includes('2024')){
            //     cy.get('[class="prev"]').eq(0).click({force: true})
            //     selectYear()
            // }

            if(!yearName.includes(year)){
                cy.get('[class="next"]').eq(1).click({force: true})
                selectYear(year)
            }
        })
    }

    function selectMonth(month){
        cy.get('[class="month"]').contains(month).click({force: true})
    }

    function selectDay(day){
        cy.get('[class="day"]').contains(day).click({force: true})
    }

    selectYear(year)
    selectMonth(month)
    selectDay(day)
})

Cypress.Commands.add('selectPrevDate', (year, month, day) => {
    function selectYear(year){
        cy.get('.datepicker-switch').first().then((yearText)=>{
            let yearName = yearText.text()
            //logic for selecting the year
            if(!yearName.includes(year)){
                cy.get('[class="prev"]').eq(0).click({force: true})
                selectYear(year)
            }
        })
    }

    function selectMonth(month){
        cy.get('[class="month"]').contains(month).click({force: true})
    }

    function selectDay(day){
        cy.get('[class="day"]').contains(day).click({force: true})
    }

    selectYear(year)
    selectMonth(month)
    selectDay(day)
})