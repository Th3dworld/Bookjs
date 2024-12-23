//Get dom objects
const tableBody = document.getElementById("books");
const addBookBtn = document.getElementById("add-book");

const dialog = document.getElementById("dialog");
const showButton = document.getElementById("add-book");
const submitBtn = document.getElementById("submit")
const closeButton = document.getElementById("close-btn");

//create variables
var myLibrary = []

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
    tableBody.innerHTML = ""
    myLibrary.forEach(book => tableBody.innerHTML += `
        <tr id="${book.title}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>
                <div id="read-button">
                ${book.read}
                <label class="switch">
                    <input type="checkbox" class="checkbox" value="${book.read}" for="${book.title}" ${book.read === "read"? "checked":""}>
                    <span class="slider round"></span>
                </label>
                </div>
            </td>
            <td><img src="images/trash-can-outline.svg" alt="trash-can-outline" class="delete" name="${book.title}"></td>
        </tr>
    `);



    if(myLibrary.length === 0){
        tableBody.innerHTML += `
        <tr>
            <td colspan="5" text-align="center">No books here boss</td>
        </tr>`
    }

    const deleteRow = Array.from(document.getElementsByClassName('delete'));
    const read_status = Array.from(document.getElementsByClassName('checkbox'));

    read_status.forEach(elem =>{
        elem.addEventListener("click", ()=>{
            const index = myLibrary.findIndex(el => el.title === elem.getAttribute("for"));
            myLibrary[index].read = elem.getAttribute("value")=== "read"? "not read":"read";
            console.log(myLibrary)
            showBooks()
        });
    });

    deleteRow.forEach(elem =>{
        elem.addEventListener("click", ()=>{
            myLibrary = myLibrary.filter(el => el.title !== elem.getAttribute("name"))
            deleteRow.pop(deleteRow.findIndex(el => el === elem))
            showBooks()
        });
    });

}


addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("1984", "George Orwell", 328, "not read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "read");
addBookToLibrary("Moby Dick", "Herman Melville", 635, "not read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "read");


dialog.addEventListener("close", (e) => {
    const title = document.getElementById("bookName").value = ""
    const author = document.getElementById("Author").value = ""
    const pages = document.getElementById("pageNumber").value = ""
    const read = document.getElementsByName("readStatus").forEach(btn => btn.checked = false)
     // Have to check for "default" rather than empty string
});

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const title = document.getElementById("bookName").value
    const author = document.getElementById("Author").value
    const pages = document.getElementById("pageNumber").value
    const read = document.getElementsByName("readStatus")
    var read_status = ""

    read.forEach(btn =>{
        if(btn.checked){
            read_status = btn.value
        }
    });

    addBookToLibrary(title, author, pages, read_status);
    showBooks()

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

showBooks()

