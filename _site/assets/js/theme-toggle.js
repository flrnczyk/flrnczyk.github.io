document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  
  html.classList.add('no-transition');

  
  let userChoice = localStorage.getItem('theme') || 'system';
  applyTheme(userChoice);

  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html.classList.remove('no-transition');
    });
  });

  
  function handleToggle(e) {
    e.preventDefault();

    if (userChoice === 'system') userChoice = 'dark';
    else if (userChoice === 'dark') userChoice = 'light';
    else userChoice = 'system';

    localStorage.setItem('theme', userChoice);
    applyTheme(userChoice);
  }

  toggle.addEventListener('click', handleToggle);
  toggle.addEventListener('touchstart', handleToggle, { passive: false });

  
  function applyTheme(choice) {
    
    html.classList.remove('dark');
    html.removeAttribute('data-theme');

    
    html.setAttribute('data-theme', choice);

    
    if (choice === 'dark') {
      html.classList.add('dark');
    } else if (choice === 'light') {
      
    } else {
      
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        html.classList.add('dark');
      }
    }
  }

  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'system' || !localStorage.getItem('theme')) {
      if (e.matches) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  });
});