function calcularDivisores() {
    // Obtener el valor ingresado por el usuario
    const numero = document.getElementById("numero").value;

    // Validar si el número ingresado es válido
    if (numero === "" || numero <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    // Convertir el número a entero
    const n = parseInt(numero);

    // Array para almacenar los divisores
    let divisores = [];

    // Calcular los divisores
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores.push(i); // Si es divisor, lo agregamos al array
        }
    }

    // Mostrar el resultado en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Los divisores de ${n} son: <strong>${divisores.join(", ")}</strong>`;
}