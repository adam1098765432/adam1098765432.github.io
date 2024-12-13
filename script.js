// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Initialize theme based on user's preference or default to dark mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.add('dark-mode');
}


const projectScreenshot = document.getElementById('project-screenshot');

function updateProjectImage() {
    if (document.body.classList.contains('light-mode')) {
        // Light mode active
        projectScreenshot.src = 'project-light-mode.jpg';
        projectScreenshot.alt = 'Screenshot of project in light mode';
    } else {
        // Dark mode active
        projectScreenshot.src = 'project-dark-mode.jpg';
        projectScreenshot.alt = 'Screenshot of project in dark mode';
    }
}

// Call updateProjectImage initially to set the correct image on page load
updateProjectImage();

// Add a listener to update the image when the theme changes
darkModeToggle.addEventListener('click', updateProjectImage);

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
