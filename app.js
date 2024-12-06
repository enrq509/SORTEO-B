// Base de datos de premios (puedes editar o añadir más premios aquí)
const premios = [
    { numero: 1, premio: "Premio A" },
    { numero: 2, premio: "Premio B" },
    { numero: 3, premio: "Premio C" },
    { numero: 4, premio: "Premio D" },
    { numero: 5, premio: "Premio E" }
];

// Función para buscar el premio asociado
function buscarPremio() {
    const numeroInput = document.getElementById("numero").value; // Obtiene el número ingresado
    const numero = parseInt(numeroInput); // Convierte a número
    const resultado = premios.find(item => item.numero === numero); // Busca el premio

    // Muestra el resultado
    const resultadoDiv = document.getElementById("resultado");
    if (resultado) {
        resultadoDiv.innerHTML = `El premio asociado al número ${numero} es: <strong>${resultado.premio}</strong>`;
    } else {
        resultadoDiv.innerHTML = `No hay premio asociado al número ${numero}.`;
    }
}