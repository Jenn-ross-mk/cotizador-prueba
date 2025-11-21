
document.querySelector(".modelo-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que recargue la página

    const select = document.getElementById("modelo");
    const selectedOption = select.options[select.selectedIndex];

    const url = selectedOption.getAttribute("data-url");

    if (url) {
        window.location.href = url; // Redirige a la página correspondiente
    } else {
        alert("Por favor seleccioná un modelo válido.");
    }
});
