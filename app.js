//Get dom objects
const tableBody = document.getElementById("books");
const addBookBtn = document.getElementById("add-book");

//create variables
const myLibrary = []

//Logic functions
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function showBooks(){
    myLibrary.forEach(book => tableBody.innerHTML += `
        <tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td></tr>
    `);
}


addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("1984", "George Orwell", 328, "not read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "read");
addBookToLibrary("Moby Dick", "Herman Melville", 635, "not read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "read");


showBooks()

addEventListener(onclick, ()=>{
    
});