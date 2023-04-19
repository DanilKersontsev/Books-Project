class LS {
    addbookLS(book) {
        let books
        if(localStorage.getItem('book') === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('book'))
        }
        books.push(book)
        localStorage.setItem('book', JSON.stringify(books))
    }

    deletebookLS(book) {
        let books
        if(localStorage.getItem('book') === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('book'))
        }
        books.forEach((bookLS, bookIndex) => {
            if(JSON.stringify(bookLS) === JSON.stringify(book)){
                books.splice(bookIndex, 1)
            }
        })
        localStorage.setItem('book', JSON.stringify(books))
    }
    getBooksFromLS() {
        let books
        if (localStorage.getItem("book") === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("book"))
        }
        books.forEach((book) => {
            let title = book[0]
            let author = book[1]
            let ISBN = book[2]
            const row = bookdata.insertRow(-1)
            const cell1 = row.insertCell(0)
            const cell2 = row.insertCell(1)
            const cell3 = row.insertCell(2)
            const cell4 = row.insertCell(3)
            const a = document.createElement('a')
            a.appendChild(document.createTextNode('X'))
            a.setAttribute('href', '#')
            cell1.innerHTML = title
            cell2.innerHTML = author
            cell3.innerHTML = ISBN
            cell4.appendChild(a)
        })
    }
}