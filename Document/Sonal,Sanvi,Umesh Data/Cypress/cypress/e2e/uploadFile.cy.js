///<reference types="cypress"/>

describe('upload file test',() => {
    it('validate correct upload',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        cy.get('[name="filename"]').selectFile('C:/Users/Moreshwar/Desktop/csv1.csv')
        cy.get('#submit-button').click()
        //Your file has now been uploaded!
        cy.on('window:alert',(str)=>{
            expect(str).to.include('Your file has now been uploaded!')
        })
    })
})