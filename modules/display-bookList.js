import LocalStorageClass from './local-storage.js';
import CreateBookElements from './create-book-element.js';

export default class DisplayBookList {
  static displayBooks() {
    const books = LocalStorageClass.getbooksFromStore();
    books.forEach((book) => CreateBookElements.createBookElement(book));
  }

  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.remove();
    }
  }
}