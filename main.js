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
    console.log('displayBooks METHOD');
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      console.log('No books on local storage');
    } else {
      this.books = newBooks;
      console.log('WE HAVE BOOKS');
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
  myLibrary.addBook();
  myLibrary.removeBook();
});
