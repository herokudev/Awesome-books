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
    console.log("displayBooks METHOD")
  }
  
  addBook() {
    console.log("addBook METHOD")
  }
  
  removeBook() {
    console.log("removeBook METHOD")
  }
  
}

const myLibrary = new Library();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page fully loaded');
  myLibrary.displayBooks();
  myLibrary.addBook();
  myLibrary.addBook();  
});
