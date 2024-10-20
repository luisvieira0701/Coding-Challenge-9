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

//Task 3 Create a Patron Class 
class Patron {
    constructor (name, borrowedBooks = []) {
        this.name = name
        this.borrowedBooks = borrowedBooks
    }

    borrowBook(book) { //Method to borrow book if it is available, and updating its status
        if (book.isAvailable) {
            this.borrowedBooks.push(book)
            book.isAvailable = false
        } else {
            return "Book is not currently available"
        }
    }
    returnBook(book) { //Method to return the book if it is borrowed
        for (let b of this.borrowedBooks) {
            if (b === book) {
                book.isAvailable = true
                this.borrowedBooks = this.borrowedBooks.filter(b => b !== book) 
            } else {
                return "Book is not borrowed by this patron"
            }
        }
    }
}