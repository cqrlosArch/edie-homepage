const nav = document.getElementById('main-navigation');

const menuClick = () => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.icon--open')) {
      nav.classList.add('main-navigation--active');
    }
    if (
      e.target.matches('.icon--close') ||
      e.target.matches('.main-list__link')
    ) {
      nav.classList.remove('main-navigation--active');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  menuClick();
});
