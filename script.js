function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.innerWidth <= 1000) { // Or your breakpoint
            toggleMenu(); // Call toggleMenu to close it
        }
    } else {
        console.error(`Element with ID '${targetId}' not found.`);
    }
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
    document.getElementById('light-mode-icon').style.display = 'none';
}
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const menuParent = document.querySelector(".menu-parent");

    if (navLinks && menuParent) {
        navLinks.classList.toggle("active");
        menuParent.classList.toggle("active");
    } else {
        console.error("One or more elements not found!");
        if (!navLinks) console.error("navLinks not found");
        if (!menuParent) console.error("menuParent not found");
    }
}