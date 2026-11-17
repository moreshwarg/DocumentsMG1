////<reference types="Cypress"/>

// css-- parent to child
// traversin method -- // .find() .eq() .get

//.next() .prev() .nextAll() .closet() .first() .last()

describe('traversing methods',()=>{
    beforeEach(()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })

    it('.children() method',()=>{
        cy.get('.traversal-drinks-list').children('#espresso').should('include.text', 'Espresso')
    })

    it('.parent() method',()=>{
       cy.get('.traversal-mark').parent().should('include.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
       cy.get('#espresso').parent().should('have.class', 'traversal-drinks-list')
    })

    it('.find() method',()=>{
        cy.get('.traversal-drinks-list').find('li').eq(1).should('include.text', 'Tea')
    })

    it('filter() method',()=>{
        cy.get('.btn-group-toggle > *').filter('.active').should('include.text', 'Button-1')
    })

    it.only('siblisgs method',()=>{
        cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
    })
})
