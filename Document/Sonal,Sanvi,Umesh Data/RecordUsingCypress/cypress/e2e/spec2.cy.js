describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('AddingShirt', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').clear('M');
    
    cy.get('#loginFrm_loginname').type('Moreshwar');
    
    cy.get('#loginFrm_password').type('Gayke@123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
   // cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click();
    //cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click();
    //cy.get('.subcategories > :nth-child(1) > .current > a').click();
    //cy.xpath
    //.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').click();
    //cy.get('.cart').click();
    cy.get(':nth-child(7) > .btn > .fa').click();
    /* ==== End Cypress Studio ==== */
  });
})