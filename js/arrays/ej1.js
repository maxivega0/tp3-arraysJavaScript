//* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del
//* año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses.length);
console.log(meses);
document.write(`<h1>Meses del año.</h1>`);
document.write(`<ol>`);
for (let i = 0; i < meses.length; i++) {
    document.write(`<li>${meses[i]}</li>`);  
}
document.write(`</ol>`);
