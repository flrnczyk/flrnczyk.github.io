document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);

  toggle.addEventListener('click', () => {
    let current = localStorage.getItem('theme') || 'system';
    let next;
    if (current === 'system') next = 'dark';
    else if (current === 'dark') next = 'light';
    else next = 'system';

    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      html.removeAttribute('data-theme');
    } else if (theme === 'light') {
      html.classList.remove('dark');
      html.removeAttribute('data-theme');
    } else { // system
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'system');
      
      
      if (window.matchMedia) {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        if (media.matches) html.classList.add('dark');
        else html.classList.remove('dark');
        
        media.addEventListener('change', e => {
          if (e.matches) html.classList.add('dark');
          else html.classList.remove('dark');
        });
      }
    }
  }
});