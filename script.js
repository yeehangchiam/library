const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

overlay.addEventListener('click',()=>{
    const modals= document.querySelectorAll('.modal.active')
    modals.forEach(modal=>{
        closeModal(modal);
    })
})

closeModalButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

let myLibrary = [
    {
        "author": "J. K. Rowling",
        "title": "Harry Potter and the Philosopher's Stone",
        "pages": 420,
        "read": false,
    },
    {
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "pages": 365,
        "read": false,
    }
];

function Book(author, title, pages, read){
   this.author = author;
   this.title = title;
   this.pages = pages;
   this.read = read;
}

function addBookToLibrary(){
    const author = prompt("Enter the book author:");
    const title = prompt("Enter the book title:");
    const pages = prompt("Enter the book pages:");
    const read = prompt("Did you read it?");

    const newBook = {
        author: author,
        title: title,
        pages: pages,
        read: read,
    };

    myLibrary.push(newBook);
    console.log(myLibrary);
}


let cardsContainer = document.getElementById('cards-container'); 
let cardsTitle = document.getElementById('title'); 
let cardsAuthor = document.getElementById('author'); 
let cardsPages = document.getElementById('pages'); 
let cardsRead = document.getElementById('read'); 

function displayBook(){
    myLibrary.forEach(book => {
        let card = `
            <a href="#" id="card" class="mx-auto my-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 id="title" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${book.title}</h5>
                <p id="author" class="font-normal text-gray-700 dark:text-gray-400">${book.author}</p>
                <p id="pages" class="font-normal text-gray-700 dark:text-gray-400">${book.pages}</p>
                <p id="read" class="font-normal text-gray-700 dark:text-gray-400">${book.read}</p>
            </a>
        `;

        cardsContainer.innerHTML += card;
        
    })

}

displayBook();

const container = document.querySelector('#container');

const btn = document.getElementById('add-book-button');
btn.addEventListener("click", addBookToLibrary);
container.appendChild(btn);
