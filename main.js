/* eslint-disable max-classes-per-file */
const booksList = document.querySelector('#booksList');
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
      localStorage.setItem('booksList', JSON.stringify(this.books));
    } else {
      newBooks.forEach((book) => Library.addBookToList(book));
    }
  }

  static addBookToList(book) {        
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.author}</td> 
    <td>${book.title}</td>
    <td><a href="#" class="btn removeButton text-rigth d-flex align-items-end">Remove</a></td>
    `;
    booksList.appendChild(row);
  }

  addBook() {
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      this.books = [];
      localStorage.setItem('booksList', JSON.stringify(this.books));
    } else {
      this.books = newBooks;
      objBook.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      objBook.title = addTitle.value;
      objBook.author = addAuthor.value;
      this.books.push(objBook);
      localStorage.setItem('booksList', JSON.stringify(this.books));
      Library.addBookToList(objBook);
      addTitle.value = '';
      addAuthor.value = '';
    }
  }

  removeBook(elem) {
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      this.books = [];
    } else {
      const row = elem.parentElement.parentElement.innerHTML;
      const fields = row.split('<');
      const authorName = fields[1].slice(3, fields[1].length);
      newBooks.forEach((book, index) => {
        if (book.author === authorName) {
          newBooks.splice(index, 1);
        }
      });
      elem.parentElement.parentElement.remove();
      localStorage.setItem('booksList', JSON.stringify(newBooks));
    }
  }
}

const myLibrary = new Library();

document.addEventListener('DOMContentLoaded', () => {
  myLibrary.displayBooks();
});

btnAddBook.addEventListener('click', () => {
  myLibrary.addBook();
});

booksList.addEventListener('click', (e) => {
  myLibrary.removeBook(e.target);
});