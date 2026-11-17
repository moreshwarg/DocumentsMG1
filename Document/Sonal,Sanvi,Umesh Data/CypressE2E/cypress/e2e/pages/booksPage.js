class Books{
    selectBooks(readBook){
        cy.get('.fixed_wrapper .prdocutname').each((book)=>{
            let bookName = book.text()
            if(bookName === readBook){
                cy.wrap(book).click()
            }
        })
        cy.get('li a.cart').click()
    }
    // checkOnCheckOut(){
    //     return 
    // }
}

export default Books