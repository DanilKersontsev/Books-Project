class UI {
    constructor() {
        this.bookdata = document.querySelector('#mytable')
        this.form = document.querySelector('#book-form')
    }

    addbook(e) {
        const row = bookdata.insertRow(-1)
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.setAttribute('href', '#')
        cell1.innerHTML = titlein.value
        cell2.innerHTML = authorin.value
        cell3.innerHTML = ISBNin.value
        cell4.appendChild(a)
        const bookslists = [titlein.value, authorin.value, ISBNin.value]
        //addbookLS(bookslists)

    }

    deletebook(e) {
        if (e.target.textContent == 'X') {
            if (confirm('Are you sure to delete this book?')) {
                e.target.parentElement.parentElement.remove()
                let bookIsbn = e.target.parentElement.previousElementSibling
                let bookAuthor = bookIsbn.previousElementSibling
                let bookTitle = bookAuthor.previousElementSibling
                let book = [bookTitle.textContent, bookAuthor.textContent, bookIsbn.textContent]

                deletebookLS(book)

            }
        }
    }
}