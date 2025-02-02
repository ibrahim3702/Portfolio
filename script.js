function smoothScroll(target) {
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Toggle icon visibility
    document.getElementById('light-mode-icon').style.display = isDarkMode ? 'none' : 'block';
    document.getElementById('dark-mode-icon').style.display = isDarkMode ? 'block' : 'none';
}

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('light-mode-icon').style.display = 'none'; // Hide light mode icon
}