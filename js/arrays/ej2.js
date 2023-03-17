//* 2- Crear un script que solicite al usuario mediante un prompt el nombre de
//* ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
//* debe mostrar el arreglo generado, luego realizar las siguientes acciones:
//* ● Mostrar la longitud del arreglo.
//* ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
//* última.
//* ● Añade en última posición la ciudad de París.
//* ● Escribe por pantalla el elemento que ocupa la segunda posición.
//* ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
//* 'Barcelona'.

let ciudades = [];
let i = 0;
do{
    ciudades[i] = prompt("Ingrese el nombre de la ciudad.");
    i++;
}while(confirm("¿Desea seguir ingresando ciudades?"));

document.write(`<h1>Lista de Ciudades</h1>`);
document.write(`<ol>`);
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ol>`);

document.write(`La longitud del arreglo es de: ${ciudades.length}`);

document.write(`<h2>Primer, tercer y ultima posicion del arreglo</h2>`);

i === 0 || i === 2
for (let i = 0; i < ciudades.length; i++) {
    (i === 0 || i === 2) ? document.write(`La ciudad en la ${i+1}er posición  es: ${ciudades[i]}.<br>`) : null;
    (i === (ciudades.length-1)) ? document.write(`La ciudad en la ultima posicion es: ${ciudades[i]}.<br>`) : null;
}

ciudades.push('Paris');

document.write(`<h3>El elemento que ocupa la segunda posicion es: ${ciudades[1]}.</h3>`);

ciudades[1] = 'Barcelona';


document.write(`<h1>Lista actualizada de Ciudades.</h1>`);
document.write(`<ol>`);
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ol>`);