//Get dom objects
const tableBody = document.getElementById("books");
const addBookBtn = document.getElementById("add-book");

const dialog = document.getElementById("dialog");
const showButton = document.getElementById("add-book");
const submitBtn = document.getElementById("submit")
const closeButton = document.getElementById("close-btn");

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

dialog.addEventListener("close", (e) => {
    console.log(document.getElementById("book-name").value)
    console.log(dialog.returnValue === "default" ? "No return value." : `ReturnValue: ${dialog.returnValue}.`); // Have to check for "default" rather than empty string
});

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log(`yes`);
    dialog.close();
});

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});
  
// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});