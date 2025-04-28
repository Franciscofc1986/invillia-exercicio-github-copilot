function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
  document.querySelector('footer').classList.toggle('dark-mode');
  document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
}