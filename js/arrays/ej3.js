//* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
//* función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
//* de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
//* anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
//* esta operación.

let posibilidades = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let cantApariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const sumaDado = dado1 + dado2;
  const posicion = posibilidades.indexOf(sumaDado);
  cantApariciones[posicion] += 1;
}
console.log("Numeros:", posibilidades);
console.log("Cantidad:", cantApariciones);
document.write(`<h1>Lista de resultados</h1>
<table class="table-bordered border-danger-subtle"><thead>
<tr>
  <th>Nro</th>
  <th>Cant</th>
</tr>
</thead>
<tbody>`);
for (let i = 0; i < posibilidades.length; i++) {
  document.write(`<tr>`);
  document.write(`<td>${posibilidades[i]}</td>`);
  document.write(`<td>${cantApariciones[i]}</td>`);
}
document.write(`</tr></tbody>
</table>`);