//Task 1- Creating book class with properties and methods
class Book {
    constructor (title, author, ISBN, _isAvailable) {
        this.tile = title
        this.author = author
        this.ISBN = ISBN
        this._isAvailable = true
    }

    getdetails () {
        console.log(`BookTitle: ${this.title}, BookAuthor: ${this.author}, ISBN: ${this.ISBN}`)
    }

    get _isAvailable () {  //getter to access book current status
       return {this._isAvailable}
    }

    set _isAvailable (status) {  //setter to update books availability
        this.isAvailable = status
    }
}