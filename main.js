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
    console.log('addBook METHOD');
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      console.log('No books on local storage');
    } else {
      this.books = newBooks;
      console.log('WE HAVE BOOKS');
    }

  }

  removeBook() {
    console.log('removeBook METHOD');
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      console.log('No books on local storage');
    } else {
      this.books = newBooks;
      console.log('WE HAVE BOOKS');
    }
  }
}

const myLibrary = new Library();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page fully loaded');
  myLibrary.displayBooks();
});
