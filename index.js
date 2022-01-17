import CreateBook from './modules/create-book.js';
import LocalStorageClass from './modules/local-storage.js';
import CreateBookElements from './modules/create-book-element.js';
import DisplayBookList from './modules/display-bookList.js';
import DisplaySection from './modules/display-one-section.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

// Dispay book list on home page
document.addEventListener('DOMContentLoaded', DisplayBookList.displayBooks);
// Saving the book when the user click add button
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title');
  const author = document.getElementById('author');

  //   create book object
  const book = new CreateBook(title, author);
  // add it to local storage
  LocalStorageClass.addbookToStore(book);
  // append the book to the book list
  CreateBookElements.createBookElement(book);
  //  Reseting the form inputs
  const form = document.querySelector('#form');
  form.reset();
});

//  removing the book when the user clicks remove button

// Remove book from UI
document.querySelector('.book-list').addEventListener('click', (e) => {
  DisplayBookList.removeBook(e.target);

  // remove book from the store
  const child = e.target.parentElement.children[0].firstElementChild.innerHTML;
  LocalStorageClass.removeFromTheStore(child);
});

// displaying one section
document.addEventListener('DOMContentLoaded', DisplaySection.DisplayOnly);
// Displaying the date and time below navigation bar
document.getElementById('date').innerHTML = DateTime.now();