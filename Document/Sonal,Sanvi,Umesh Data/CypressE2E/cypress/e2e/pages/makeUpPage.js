class Makeup{
    numberOfProducts(){
        return cy.get('.fixed_wrapper .prdocutname')
    }

    numberOfCategories(){
        return cy.get('[class="mt10 align_center"]')
    }

}

export default Makeup