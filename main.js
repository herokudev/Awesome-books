/* eslint-disable max-classes-per-file */
const booksList = document.querySelector('#booksList');
const book = document.querySelector('#book');
const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const btnAddBook = document.querySelector('#addBook');

class Library {
  constructor() {
    this.books = [];
  }

  static displayBooks() {
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

  static addBook() {
    objBook.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    objBook.title = addTitle.value;
    objBook.author = addAuthor.value;
    myLibrary.books.push(objBook);
    window.localStorage.setItem('booksList', JSON.stringify(myLibrary.books));
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

  static removeBook() {
    localStorage.setItem('booksList', JSON.stringify(myLibrary.books));
  }
}

let myLibrary = new Library();
const objBook = { id: '', title: '', author: '' };

document.addEventListener('DOMContentLoaded', () => {
  const lsLoad = JSON.parse(localStorage.getItem('booksList'));
  if (lsLoad === null) {
    myLibrary.books = [];
  } else {
    myLibrary.books = JSON.parse(localStorage.getItem('booksList'));
  }
  myLibrary.displayBooks();

});

btnAddBook.addEventListener('click', () => {
  const lsAdd = JSON.parse(localStorage.getItem('booksList'));
  if (lsAdd === null) {
    myLibrary.books = [];
  } else {
    myLibrary.books = JSON.parse(localStorage.getItem('booksList'));
  }
  myLibrary.addBook();
});

const removeBook = (elem) => {
  if (elem.classList.contains('remove')) {
    elem.parentElement.remove();
  }
};

booksList.addEventListener('click', (e) => {
  removeBook(e.target);
  const newBooks = JSON.parse(localStorage.getItem('booksList'));
  if (newBooks === null) {
    myLibrary.books = [];
  } else {
    myLibrary.books = JSON.parse(localStorage.getItem('booksList'));
  }
  myLibrary.books.forEach((book, index) => {
    if (book.author === e.target.previousElementSibling.textContent) {
      myLibrary.books.splice(index, 1);
    }
  });
  myLibrary.removeBook();
});
