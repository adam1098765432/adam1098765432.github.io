// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check the user's theme preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark-mode'); // Start in light mode if saved as light
} else {
    document.body.classList.add('dark-mode'); // Default to dark mode
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
