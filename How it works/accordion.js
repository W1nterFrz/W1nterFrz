document.querySelectorAll('.accordion').forEach(acc => {
  const header = acc.querySelector('.accordion__header');
  const content = acc.querySelector('.accordion__content');

  header.addEventListener('click', () => {
    acc.classList.toggle('open');
    content.style.maxHeight = acc.classList.contains('open') ? content.scrollHeight + 'px' : 0;
  });
});
