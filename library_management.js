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
    constructor (name) {
        this.name = name
        this.books = []
    }

    addBook (book) {
        this.books.push(book)
    }

    getAvailableBooks () { //Counting how many available books there are
        let availableBooks = this.books.filter(book => book.isAvailable)
        return availableBooks.length
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title}, Status = ${book.isAvailable}`)
        }) //Reiterating each book's title and availability

}

// Task 5 Calculate total available books in the section
    calculateTotalBooksAvailable() {
        this.books.filter(book => book.isAvailable).length
    }        
}

//Task 3 Create a Patron Class 
class Patron {
    constructor (name) {
        this.name = name
        this.borrowedBooks = []
    }

    borrowBook(book) { //Method to borrow book if it is available, and updating its status
        if (book.isAvailable) {
            this.borrowedBooks.push(book)
            book.isAvailable = false
            console.log(`${this.name} borrowed ${book.title}`)
        } else {
            console.log("Book is not currently available")
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

//Task 4- Create VIPPatron with inheritance from Patron
class VIPPatron extends Patron{
    constructor (name, priority = true) {
        super (name)
        this.priority = priority
    }

    borrowBook(book) {
        if (book.isAvailable || this.priority) { //Adding book if available or if it is already owned by different patron
            super.borrowBook(book) 
            book.isAvailable = false
            console.log(`${this.name} has VIP status and is borrowing ${book.title}`) //Message to declare book has been borrowed
        } else {
           return "Book is not currently available" //Message to indicate book that VIPpatron tried to borrow is not available
        }
    }
}

//Task 6- Create and Manage library sections and patrons
const SciFi = new Section ("SciFi")
const Religion = new Section ("Religion")

const book1 = new Book ("Dune", "Frank Herbert", "9780316769170")
const book2 = new Book ("Neuromancer", "William Gibson", "9781451632586")
const book3 = new Book ("Holy Bible", "The Apostles", "9780060887896")

SciFi.addBook(book1)
SciFi.addBook(book2)
Religion.addBook(book3)

const regularPatron = new Patron ("Spongebob Squarepants")
const vipPatron = new VIPPatron ("Squidward Tentacles")

regularPatron.borrowBook(book1)
vipPatron.borrowBook(book1)
regularPatron.returnBook(book1)

SciFi.listBooks()

console.log(`Total available books in SciFi: ${SciFi.getAvailableBooks()}`)
console.log(`Total available books in Religion: ${Religion.getAvailableBooks()}`)

