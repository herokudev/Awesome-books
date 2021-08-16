const booksList = document.querySelector('#booksList');
const book = document.querySelector('#book');
const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const btnAddBook = document.querySelector('#addBook');

let books = [];
const objBook = { id: '', title: '', author: '' };

document.addEventListener('DOMContentLoaded', () => {
  books = JSON.parse(localStorage.getItem('booksList'));
  if (books !== null) {
    books.forEach((book) => {
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
});

btnAddBook.addEventListener('click', () => {
  books = JSON.parse(localStorage.getItem('booksList'));
  if (books !== null) {
    objBook.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    objBook.title = addTitle.value;
    objBook.author = addAuthor.value;
    books.push(objBook);
    localStorage.setItem('booksList', JSON.stringify(books));
  }

  const temp1 = book.content;
  const book1 = document.importNode(temp1, true);
  const bookTitle1 = book1.querySelector('#bookName');
  const bookAuthor1 = book1.querySelector('#bookAuthor');
  bookTitle1.textContent = addTitle.value;
  bookAuthor1.textContent = addAuthor.value;
  booksList.appendChild(book1);

  addTitle.value = '';
  addAuthor.value = '';
});

const removeBook = (elem) => {
  if (elem.classList.contains('remove')) {
    elem.parentElement.remove();
  }
};

booksList.addEventListener('click', (e) => {
  removeBook(e.target);
  const newBooks = JSON.parse(localStorage.getItem('booksList'));
  newBooks.forEach((book, index) => {
    if (book.author === e.target.previousElementSibling.textContent) {
      newBooks.splice(index, 1);
    }
  });
  localStorage.setItem('booksList', JSON.stringify(newBooks));
});
