const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };
  
  // Aggiungi un bottone per attivare la dark mode
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);