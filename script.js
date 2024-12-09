// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check the user's theme preference in localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.add('dark-mode');
}

// Toggle between dark and light mode
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});
