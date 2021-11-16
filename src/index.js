import './style.css';

const form = document.querySelector('form');
const book_list = document.querySelector('.list-group');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const add_btn = document.querySelector('.btn-primary');

const books = [];

// const add_book = (title, author) => {
//   books.push({
//     title,
//     author
//   });
//   return { title, author }
// }

const show_book = () => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const button = document.createElement('button');

  li.classList = 'list-group-item';
  p.innerText = `"${title.value}" by ${author.value}`;
  p.classList = 'font-monospace d-inline';
  button.innerText = 'Delete';
  button.classList = 'btn btn-danger btn-sm float-end';

  li.appendChild(p);
  li.appendChild(button);
  book_list.appendChild(li);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  show_book();

  title.value = '';
  author.value = '';
});