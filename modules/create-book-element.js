export default class CreateBookElements {
  static createBookElement(book) {
    const bookContainer = document.querySelector('.book-list');
    const listContainer = document.createElement('div');
    listContainer.className = 'list-Container';
    listContainer.classList.add('flex');
    listContainer.innerHTML += `
              <div class="table-text"><span class="table-text-1">${book.title}</span>by  <span class="table-text-2">${book.author}</span></div>
              <button class='delete'>Remove</button>
              `;

    bookContainer.appendChild(listContainer);
  }
}