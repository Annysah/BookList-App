const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const isbnInput = document.querySelector("#isbn")

const button = document.querySelector(".btn")

const bookList = document.querySelector("#book-lists")

button.addEventListener('click', addBook) 

function addBook() {
    if(titleInput.value == "" && authorInput.value == "" && isbnInput.value == "") {
        alert("Enter an input")
    } else {
        const newRows = document.createElement('tr')
    
        const newTitle = document.createElement('th')
        newTitle.innerHTML = titleInput.value
        newRows.appendChild(newTitle)
    
        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = authorInput.value
        newRows.appendChild(newAuthor)
    
        const newIsbn = document.createElement('th')
        newIsbn.innerHTML = isbnInput.value
        newRows.appendChild(newIsbn)
    
        bookList.appendChild(newRows)
    }
}