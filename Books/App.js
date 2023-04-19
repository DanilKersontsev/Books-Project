ui = new UI()
ls = new LS()

const form  = document.querySelector('form')
console.log(form)
const titlein = document.querySelector('#title')
const bookdata = document.querySelector('#mytable')
const authorin = document.querySelector('#author')
const ISBNin = document.querySelector('#ISBN')



bookdata.addEventListener('click', ui.deletebook)
form.addEventListener('submit', addBook)
document.addEventListener('DOMContentLoaded', ls.getBooksFromLS)




function addBook(e){
    console.log("test")
    console.log(titlein.value)
    console.log(authorin.value)
    console.log(ISBNin.value)
    //
    let book = new Book(titlein.value, authorin.value, ISBNin.value)
    console.log(book)
    ui.addbook(book)
    ls.addbookLS(book)


    titlein.value = ""
    authorin.value = ""
    ISBNin.value = ""
    e.preventDefault()
}
