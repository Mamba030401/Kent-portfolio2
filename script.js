document.getElementById('darkToggle').addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
  const btn = document.getElementById('darkToggle');
  btn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
