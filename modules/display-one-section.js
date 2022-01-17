export default class DisplaySection {
  static DisplayOnly() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
      item.addEventListener('click', DisplaySection.nav);
    });
  }

  static nav(e) {
    e.preventDefault();
    const currentPage = e.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
  }
}