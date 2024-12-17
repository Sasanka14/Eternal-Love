function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// Disable right-click on the entire document
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable common key combinations for saving or inspecting
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'p')) {
        e.preventDefault();
    }
});

