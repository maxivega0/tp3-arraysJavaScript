//* 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
//* por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
//* solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseInt(prompt("Ingrese un numero"));
function tabla(numero) {
    document.write(`<h1>Tabla de multiplicar de ${numero}</h1>
<table class="table-bordered border-danger-subtle"><thead>
<tr>
  <th>Operación</th>
  <th>Resultado</th>
</tr>
</thead>
<tbody>`);
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
  document.write(`<tr>`);
  document.write(`<td>${numero} x ${i}</td>`);
  document.write(`<td>${resultado}</td>`);
}
document.write(`</tr></tbody>
</table>`);
}
tabla(numero);