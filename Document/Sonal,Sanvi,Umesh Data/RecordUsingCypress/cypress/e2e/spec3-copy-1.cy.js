describe('template spec', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('SkincareAdd', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationteststore.com/');
    cy.xpath("//*[text()='Login or register']").click();
   cy.get('#loginFrm_loginname').clear('M');
    cy.get('#loginFrm_loginname').type('Moreshwar');
   cy.get('#loginFrm_password').clear('G');
    cy.get('#loginFrm_password').type('Gayke@123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.xpath("//*[text()='  Skincare']").click();
    cy.xpath("//*[@id='maincontainer']//div//ul/li[1]/a/img").click();
    cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click();
    cy.get(':nth-child(7) > .btn > .fa').click();
    /* ==== End Cypress Studio ==== */
  });
})