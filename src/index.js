import './style.css';

const form = document.querySelector('form');
const list = document.querySelector('.list-group');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');

// const books = [];

// const add_book = (title, author) => {
//   books.push({
//     title,
//     author
//   });
//   return { title, author }
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();

  showBook();

  title.value = '';
  author.value = '';
});

const showBook = () => {
  const li = document.createElement('li');

  li.innerHTML = `
  <p class="font-monospace d-inline">"${title.value}" by ${author.value}</p>
  <button class="btn btn-danger btn-sm float-end">Delete</button>
  `;

  li.classList = 'list-group-item';
  list.appendChild(li);

  const deleteBtn = document.querySelectorAll('.btn-danger');

  deleteBtn.forEach(function(btn){
    btn.addEventListener('click', e => {
      e.target.parentNode.remove();
    });
  });
}
