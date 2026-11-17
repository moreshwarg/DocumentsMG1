///<reference types="cypress"/>

describe(" data table validations", () => {
    beforeEach(() => {
        // visiting the app
        cy.visit('https://www.webdriveruniversity.com/')
        //click on the data table tab
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })

    it('validate the age of user',()=>{
        cy.get('#thumbnail-1 tr td:nth-child(2)').each((ele, index)=>{
            const userName = ele.text()
            if(userName === 'Doe'){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
                    const userAge = age.text()
                    expect(userAge).to.equal('20')
                })
            }
        })
    })

    it('addition of users age',()=>{
        let sumOfAge = 0
        cy.get('#thumbnail-1 tr td:nth-child(3)').each((ele)=>{
            const age = parseInt(ele.text())
            if(!isNaN(age)){
                sumOfAge = sumOfAge + age
            }
            // const age = Number(ele.text())
        }).then(()=>{
            expect(sumOfAge).to.equal(322)
        })
    })
})
