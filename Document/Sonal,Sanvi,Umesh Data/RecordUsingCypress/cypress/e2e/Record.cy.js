describe('Recors and play', () => {
  it('AddBookInCart', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click();
    //wait(10000);
    cy.get('#loginFrm_loginname').type('Moreshwar');
    //wait(10000);
    cy.get('#loginFrm_password').type('Gayke@123');
    //wait(10000);
    cy.get('#loginFrm > fieldset > .btn').click();
    //wait(10000);
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click();
    cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click();
    cy.get('.cart').click();
    cy.get('#cart_checkout1').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Test2', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').clear('M');
    cy.get('#loginFrm_loginname').type('Moreshwar');
    //cy.get('#loginFrm_password').clear('G');
    cy.get('#loginFrm_password').type('Gayke@123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
    cy.get(':nth-child(4) > :nth-child(1) > img').click();
    cy.get(':nth-child(4) > .thumbnail > :nth-child(1) > img').click();
    cy.get('#product > fieldset').click();
   
   
    cy.get('.product-list').click();
   
    cy.get('#cart_checkout1').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Test3', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').clear('M');
    cy.get('#loginFrm_loginname').type('Moreshwar');
    cy.get('#loginFrm_password').clear('G');
    cy.get('#loginFrm_password').type('Gayke@123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
    cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click();
    cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click();
    cy.get('.cart').click();
    cy.get('#cart_checkout1').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Test4RemoveProduct', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').clear('M');
    cy.get('#loginFrm_loginname').type('Moreshwar');
    cy.get('#loginFrm_password').clear('G');
    cy.get('#loginFrm_password').type('Gayke@123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
    cy.get(':nth-child(2) > :nth-child(7) > .btn > .fa').click();
    cy.get(':nth-child(2) > :nth-child(7) > .btn > .fa').click();
    cy.get(':nth-child(7) > .btn > .fa').click();
    cy.get('.col-md-4 > .btn').click();
  //  cy.get('.sub_menu > .open > a').click();
    /* ==== End Cypress Studio ==== */
  });
})