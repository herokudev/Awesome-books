/* eslint-disable max-classes-per-file */
const booksList = document.querySelector('#booksList');
const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const btnAddBook = document.querySelector('#addBook');
const showDateTime = document.querySelector('#localDate');
const navList = document.querySelector('#nav-list');
const navAdd = document.querySelector('#nav-add');
const navContact = document.querySelector('#nav-contact');
const sectionList = document.querySelector('#section0');
const sectionAdd = document.querySelector('#section1');
const sectionContact = document.querySelector('#section2');
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
    <td>"${book.title}" by ${book.author} </td>
    <td><a href="#" class="btn btn-danger btn-sm delete text-center remove-book ms-auto bg-white border border-2 border-dark text-dark px-1 d-flex align-items-end">Remove</a></td>    
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
      if (addTitle.value === '' || addAuthor.value === '') {
        Library.showAlert('Please fill in all fields.', 'danger');
      } else {
        this.books.push(objBook);
        localStorage.setItem('booksList', JSON.stringify(this.books));
        Library.addBookToList(objBook);
        Library.showAlert('Book added complete.', 'success');
        addTitle.value = '';
        addAuthor.value = '';
      }
    }
  }

  removeBook(elem) {
    const newBooks = JSON.parse(localStorage.getItem('booksList'));
    if (newBooks === null) {
      this.books = [];
    } else {
      const row = elem.parentElement.parentElement.innerHTML;
      const fields = row.split('<td>');
      const titleName = fields[1].split('"');
      newBooks.forEach((book, index) => {
        if (book.title === titleName[1]) {
          newBooks.splice(index, 1);
        }
      });
      elem.parentElement.parentElement.remove();
      localStorage.setItem('booksList', JSON.stringify(newBooks));
    }
  }

  static showAlert(message, className) {
    const myheader = document.querySelector('#localDate');
    const msg = document.createElement('P');
    msg.className = `alert alert-${className}`;
    msg.innerHTML = message;
    myheader.appendChild(msg);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static showActiveSection(sectionID) {
    if (sectionID === 0) {
      sectionList.style.display = 'block';
      sectionAdd.style.display = 'none';
      sectionContact.style.display = 'none';
    } else if (sectionID === 1) {
        sectionList.style.display = 'none';
        sectionAdd.style.display = 'block';
        sectionContact.style.display = 'none';
    } else {
      sectionList.style.display = 'none';
      sectionAdd.style.display = 'none';
      sectionContact.style.display = 'block';
    }    
  }
}

const myLibrary = new Library();

document.addEventListener('DOMContentLoaded', () => {
  const resul = luxon.DateTime.now().toFormat('ff');
  showDateTime.innerHTML = resul;
  Library.showActiveSection(0);
  myLibrary.displayBooks();
});

btnAddBook.addEventListener('click', () => {
  myLibrary.addBook();
});

booksList.addEventListener('click', (e) => {
  myLibrary.removeBook(e.target);
});

navList.addEventListener('click', () => {
  Library.showActiveSection(0);
});

navAdd.addEventListener('click', () => {
  Library.showActiveSection(1);
});

navContact.addEventListener('click', () => {
  Library.showActiveSection(2);
});