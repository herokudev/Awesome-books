/* eslint-disable max-classes-per-file */
const booksList = document.querySelector('#booksList');
const book = document.querySelector('#book');
const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const btnAddBook = document.querySelector('#addBook');
const objBook = { id: '', title: '', author: '' };

class Library {
  constructor() {
    this.books = [];
  }

  displayBooks() {
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      this.books = [];
    } else {
      this.books = newBooks;
      this.books.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('myBook');
        div.innerHTML = `
      <h5>${book.title}</h5>  
      <p>${book.author}</p>  
      <button class="remove">remove</button>
      <hr>
      `;
        booksList.appendChild(div);
      });
    }
  }

  addBook() { 
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      this.books = [];
    } else {
      this.books = newBooks;
      objBook.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      objBook.title = addTitle.value;
      objBook.author = addAuthor.value;
      this.books.push(objBook);
      window.localStorage.setItem('booksList', JSON.stringify(this.books));
      const temp1 = book.content;
      const book1 = document.importNode(temp1, true);
      const bookTitle1 = book1.querySelector('#bookName');
      const bookAuthor1 = book1.querySelector('#bookAuthor');
      bookTitle1.textContent = addTitle.value;
      bookAuthor1.textContent = addAuthor.value;
      booksList.appendChild(book1);
    
      addTitle.value = '';
      addAuthor.value = '';      
    }
  }

  removeBook(elem) {
    if (elem.classList.contains('remove')) {
      elem.parentElement.remove();
    }
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      this.books = [];
    } else {
      this.books = newBooks;
      newBooks.forEach((book, index) => {
        if (book.author === elem.previousElementSibling.textContent) {
          newBooks.splice(index, 1);
        }
      });
      localStorage.setItem('booksList', JSON.stringify(newBooks));      
    }
  } 
}

const myLibrary = new Library();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page fully loaded');
  myLibrary.displayBooks();
});

btnAddBook.addEventListener('click', () => {
  console.log('addBook METHOD');
  myLibrary.addBook();
});

booksList.addEventListener('click', (e) => {
  console.log('addBook METHOD');
  myLibrary.removeBook(e.target);
  console.log('book DELETED');
});