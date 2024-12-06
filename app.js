// Base de datos de premios: 100 números asociados con 100 premios
const premios = [
    { numero: 1, premio: "Premio A" },
    { numero: 2, premio: "Premio B" },
    { numero: 3, premio: "Premio C" },
    { numero: 4, premio: "Premio D" },
    { numero: 5, premio: "Premio E" },
    { numero: 6, premio: "Premio F" },
    { numero: 7, premio: "Premio G" },
    { numero: 8, premio: "Premio H" },
    { numero: 9, premio: "Premio I" },
    { numero: 10, premio: "Premio J" },
    { numero: 11, premio: "Premio K" },
    { numero: 12, premio: "Premio L" },
    { numero: 13, premio: "Premio M" },
    { numero: 14, premio: "Premio N" },
    { numero: 15, premio: "Premio O" },
    { numero: 16, premio: "Premio P" },
    { numero: 17, premio: "Premio Q" },
    { numero: 18, premio: "Premio R" },
    { numero: 19, premio: "Premio S" },
    { numero: 20, premio: "Premio T" },
    { numero: 21, premio: "Premio U" },
    { numero: 22, premio: "Premio V" },
    { numero: 23, premio: "Premio W" },
    { numero: 24, premio: "Premio X" },
    { numero: 25, premio: "Premio Y" },
    { numero: 26, premio: "Premio Z" },
    { numero: 27, premio: "Premio AA" },
    { numero: 28, premio: "Premio AB" },
    { numero: 29, premio: "Premio AC" },
    { numero: 30, premio: "Premio AD" },
    { numero: 31, premio: "Premio AE" },
    { numero: 32, premio: "Premio AF" },
    { numero: 33, premio: "Premio AG" },
    { numero: 34, premio: "Premio AH" },
    { numero: 35, premio: "Premio AI" },
    { numero: 36, premio: "Premio AJ" },
    { numero: 37, premio: "Premio AK" },
    { numero: 38, premio: "Premio AL" },
    { numero: 39, premio: "Premio AM" },
    { numero: 40, premio: "Premio AN" },
    { numero: 41, premio: "Premio AO" },
    { numero: 42, premio: "Premio AP" },
    { numero: 43, premio: "Premio AQ" },
    { numero: 44, premio: "Premio AR" },
    { numero: 45, premio: "Premio AS" },
    { numero: 46, premio: "Premio AT" },
    { numero: 47, premio: "Premio AU" },
    { numero: 48, premio: "Premio AV" },
    { numero: 49, premio: "Premio AW" },
    { numero: 50, premio: "Premio AX" },
    { numero: 51, premio: "Premio AY" },
    { numero: 52, premio: "Premio AZ" },
    { numero: 53, premio: "Premio BA" },
    { numero: 54, premio: "Premio BB" },
    { numero: 55, premio: "Premio BC" },
    { numero: 56, premio: "Premio BD" },
    { numero: 57, premio: "Premio BE" },
    { numero: 58, premio: "Premio BF" },
    { numero: 59, premio: "Premio BG" },
    { numero: 60, premio: "Premio BH" },
    { numero: 61, premio: "Premio BI" },
    { numero: 62, premio: "Premio BJ" },
    { numero: 63, premio: "Premio BK" },
    { numero: 64, premio: "Premio BL" },
    { numero: 65, premio: "Premio BM" },
    { numero: 66, premio: "Premio BN" },
    { numero: 67, premio: "Premio BO" },
    { numero: 68, premio: "Premio BP" },
    { numero: 69, premio: "Premio BQ" },
    { numero: 70, premio: "Premio BR" },
    { numero: 71, premio: "Premio BS" },
    { numero: 72, premio: "Premio BT" },
    { numero: 73, premio: "Premio BU" },
    { numero: 74, premio: "Premio BV" },
    { numero: 75, premio: "Premio BW" },
    { numero: 76, premio: "Premio BX" },
    { numero: 77, premio: "Premio BY" },
    { numero: 78, premio: "Premio BZ" },
    { numero: 79, premio: "Premio CA" },
    { numero: 80, premio: "Premio CB" },
    { numero: 81, premio: "Premio CC" },
    { numero: 82, premio: "Premio CD" },
    { numero: 83, premio: "Premio CE" },
    { numero: 84, premio: "Premio CF" },
    { numero: 85, premio: "Premio CG" },
    { numero: 86, premio: "Premio CH" },
    { numero: 87, premio: "Premio CI" },
    { numero: 88, premio: "Premio CJ" },
    { numero: 89, premio: "Premio CK" },
    { numero: 90, premio: "Premio CL" },
    { numero: 91, premio: "Premio CM" },
    { numero: 92, premio: "Premio CN" },
    { numero: 93, premio: "Premio CO" },
    { numero: 94, premio: "Premio CP" },
    { numero: 95, premio: "Premio CQ" },
    { numero: 96, premio: "Premio CR" },
    { numero: 97, premio: "Premio CS" },
    { numero: 98, premio: "Premio CT" },
    { numero: 99, premio: "Premio CU" },
    { numero: 100, premio: "Premio CV" }
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
