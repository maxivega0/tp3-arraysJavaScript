//* 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
//* luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//* ● La fórmula del perímetro es p = 2*(a +b)

let altura = parseFloat(prompt("Ingrese el valor de la altura"))
let base = parseFloat(prompt("Ingrese el valor de la base"))

function perimetro(altura, base) {
    return (2 * (altura + base));
}
document.write(`El perímetro del rectágunlo es ${perimetro(altura,base)}.`);