document.addEventListener("DOMContentLoaded", function() {
    fetchQuejas();
});

function fetchQuejas() {
    const url = "https://quejas-f969f-default-rtdb.firebaseio.com/Quejas.json";

    fetch(url)
        .then(response => response.json())
        .then(data => displayQuejas(data))
        .catch(error => console.error("Error fetching quejas:", error));
}

function displayQuejas(quejas) {
    const container = document.getElementById("quejas-container");
    container.innerHTML = ""; // Clear previous content

    for (const key in quejas) {
        if (quejas.hasOwnProperty(key)) {
            const quejaData = quejas[key];
            const quejaElement = document.createElement("div");
            quejaElement.className = "queja";
            quejaElement.innerHTML = `
                <strong>Usuario:</strong> ${quejaData.Usuario} <br>
                <strong>Queja:</strong> ${quejaData.Queja}
            `;
            container.appendChild(quejaElement);
        }
    }
}
