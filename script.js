// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');
const projectScreenshot = document.getElementById('project-screenshot');

// Initialize theme based on user's preference or default to dark mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.add('dark-mode');
}

// Function to update the project image based on the current theme
function updateProjectImage() {
    if (document.body.classList.contains('light-mode')) {
        // Light mode active
        projectScreenshot.src = 'whitescreenshot1.png';
        projectScreenshot.alt = 'Screenshot of project in light mode';
    } else {
        // Dark mode active
        projectScreenshot.src = 'unnamed (1).png';
        projectScreenshot.alt = 'Screenshot of project in dark mode';
    }
}

// Call updateProjectImage initially to set the correct image on page load
updateProjectImage();

// Toggle between dark and light mode and update the project image
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
    // Update the project image after toggling the theme
    updateProjectImage();
});
