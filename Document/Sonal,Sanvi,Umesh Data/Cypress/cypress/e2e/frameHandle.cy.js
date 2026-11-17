///<reference types="cypress"/>

describe('Iframe handling',()=>{
    it('validate the iframe popup message',()=>{
        // visitng aap
        cy.visit('https://www.webdriveruniversity.com/')
        // clicking on the iframe tab
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        //handling the iframe
        cy.get('#frame').then((iframeInfo)=>{
            // .contents() --- Get the children of each element in the set of matched elements, 
            // including text and comment nodes.

            // .find() --- filter out the matched element and use focus on it
            const iframeBody = iframeInfo.contents().find('body')
            // .as() -- giving the alise name to the element for further use
            cy.wrap(iframeBody).as('insideIframe')
            cy.get('@insideIframe').find('#button-find-out-more').click()
            cy.get('@insideIframe').find('.modal-body > p')
                .should('include.text', 
                'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras')
            // .contains()-- focus on the text of element
            cy.get('@insideIframe').find('[data-dismiss="modal"]').contains('Close').click()
        })

        

    })
})