const genreText = document.getElementById("genre");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    genreText.textContent = "Cargando...";

    try {
        const response = await fetch("https://binaryjazz.us/genrenator-api/");
        const data = await response.json();

        // La API devuelve un arreglo de géneros
        genreText.textContent = data[0];
    } catch (error) {
        console.error(error);
        genreText.textContent = "Error al obtener el género 😢";
    }
});
