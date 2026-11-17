describe('template spec', () => {
  
  /* ==== Test Created with Cypress Studio ==== */
  it('Addproduct', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').clear('M');
    cy.get('#loginFrm_loginname').type('Moreshwar');
    cy.get('#loginFrm_password').clear('G');
    cy.get('#loginFrm_password').type('Gayke@123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click();
    cy.get('ul.thumbnails > :nth-child(1) > :nth-child(1) > img').click();
    cy.get(':nth-child(1) > .thumbnail > .pricetag > .price > .oneprice').click();
    cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
    /* ==== End Cypress Studio ==== */
  });
})