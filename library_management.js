//Task 1- Creating book class with properties and methods
class Book {
    constructor (title, author, ISBN, _isAvailable) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this._isAvailable = true
    }

    getdetails () {
        console.log(`BookTitle: ${this.title}, BookAuthor: ${this.author}, ISBN: ${this.ISBN}`)
    }

    get isAvailable () {  //getter to access book current status
       return this._isAvailable
    }

    set isAvailable (status) {  //setter to update books availability
        this._isAvailable = status
    }
}

//Task 2- Creating section class to manage books and availability
class Section {
    constructor (name, books = []) {
        this.name = name
        this.books = books
    }

    addBook (book) {
        this.books.push(book)
    }

    getAvailableBooks () { //Counting how many available books there are
        let availableBooks = this.books.filter(book => book.isAvailable === true)
        return availableBooks.length
    }

    listBooks() {
        return this.books.map (book => ({ //Reiterating each book's title and availability
            title: book.title,
            available: book.isAvailable
        }));

        }
}