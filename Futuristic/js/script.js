function toggleMenu() {
    const menuIcon2 = document.querySelector('.menu-icon2');
    menuIcon2.classList.toggle('open');
}

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
    const menuIcon2 = document.querySelector('.menu-icon2');
    const menuIcon = document.querySelector('.menu-icon');

    // Check if the click is outside the menu or menu icon
    if (!menuIcon.contains(e.target) && !menuIcon2.contains(e.target)) {
        menuIcon2.classList.remove('open');
    }
});

// Close the menu after selecting a menu item
const menuItems = document.querySelectorAll('.menu-icon2 a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const menuIcon2 = document.querySelector('.menu-icon2');
        menuIcon2.classList.remove('open');
    });
});
const skillBars = document.querySelectorAll('.skill-per');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.width = entry.target.dataset.width; // Use data-width for animation
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
});

skillBars.forEach(bar => {
    bar.style.width = '0'; // Set initial width to 0 for animation
    observer.observe(bar); // Observe each skill bar
});