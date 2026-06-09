let isDarkMode = false;

function cambiarTexto() {
    document.getElementById("parrafo-edwin").innerHTML =
        "¡Gracias por visitar esta página!";
}

function toggleMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    const button = document.getElementById('mode-toggle');
    button.textContent = isDarkMode
        ? 'Cambiar a claro'
        : 'Cambiar a oscuro';
}
const boton = document.getElementById('btnAlerta');

boton.addEventListener('click', () => {
    alert('¡Funcionalidad de JS agregada con éxito por Erik!');
});
