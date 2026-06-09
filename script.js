let isDarkMode = false;

function toggleMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    const button = document.getElementById('mode-toggle');
    button.textContent = isDarkMode
        ? 'Cambiar a claro'
        : 'Cambiar a oscuro';
}