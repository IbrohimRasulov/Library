import './style.css';

const form = document.querySelector('form');
const book_list = document.querySelector('.list-group');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');

function Book(title, author) {
  this.title = title.value;
  this.author = author.value;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
  const li = document.createElement('li');
  
  li.innerHTML = `
  <p class="font-monospace d-inline">${title.value}" by ${author.value}</p>
  <button class="btn btn-danger btn-sm float-end">Delete</button>
  `;

  li.classList = 'list-group-item';

  book_list.appendChild(li);
}

UI.prototype.deleteBook = function(target) {
  if(target.className === 'btn-danger') {
    target.parentElement.remove();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const book = new Book(title, author);

  const ui = new UI();

  ui.addBookToList(book);

  title.value = '';
  author.value = '';
})

book_list.addEventListener('click', (e) => {
  e.preventDefault();

  const ui = new UI();

  ui.deleteBook(e.target);
});



























// const books = JSON.parse(localStorage.getItem('books')) || [];

// const addToLocalStorage = (title, author) => {
//   books.push({
//     title,
//     author
//   });

//   localStorage.setItem('Library', JSON.stringify(books));

//   return { title, author }; 
// }

// const create_book = ({ title, author }) => {
//   const li = document.createElement('li');
//   const p = document.createElement('p');
//   const button = document.createElement('button');

//   li.classList = 'list-group-item';
//   p.innerText = `"${title.value}" by ${author.value}`;
//   p.classList = 'font-monospace d-inline';
//   button.innerText = 'Delete';
//   button.classList = 'btn btn-danger btn-sm float-end';

//   li.appendChild(p);
//   li.appendChild(button);
//   book_list.appendChild(li);
// }

// books.forEach(create_book);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const new_book = addToLocalStorage(
//     title.value,
//     author.value
//   );

//   create_book(new_book);

//   title.value = '';
//   author.value = '';
// });