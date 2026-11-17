describe('template spec', () => {
  it.skip('contact us form', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr','target').click()   
    cy.get('[placeholder="First Name"]').type("Moreshwar")
    cy.get('[placeholder="Last Name"]').type("Gayke")
    cy.get('[placeholder="Email Address"]').type('mgay@gmail.com')
    cy.get('[placeholder="Comments"]').type('Demo Account')
    cy.get('[value="SUBMIT"]').click()

 })
  it('dropdown',()=>{
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
    cy.get('#dropdowm-menu-1').select('Python').wait(2000)
    cy.get('#dropdowm-menu-2').select('TestNG').wait(2000)
    cy.get('#dropdowm-menu-3').select('JQuery').wait(2000)
    
  })
  it.skip('checkbox',()=>{
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
    cy.get('[value="option-2"]').click()
    cy.get('[value="option-1"]').click()
    

  })
  it('rediobutton',()=>{
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
    cy.get('[value="blue"]').eq(0).click().should('be.checked').wait(5000)
    cy.get('[value="green"]').click().should('be.checked')
  
     cy.get('[value="lettuce"]').click()


  
  
  })


})