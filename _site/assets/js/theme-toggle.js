document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  
  html.classList.add('loading');

  
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    html.classList.add('dark');
  }

  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html.classList.remove('loading');
    });
  });

  
  function handleToggle(e) {
    e.preventDefault();

    html.classList.toggle('dark');

    
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  
  toggle.addEventListener('click', handleToggle);
  toggle.addEventListener('touchstart', handleToggle, { passive: false });
});