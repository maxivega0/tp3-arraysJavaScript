//* 2- Definir una función que muestre información sobre una cadena de texto que se
//* le pasa como argumento. A partir de la cadena que se le pasa, la función
//* determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
//* por una mezcla de ambas.

let frase = prompt("Ingrese una frase")

function minusOrMayus (frase){
    let infoCadena = '';
    if(frase == frase.toUpperCase()){
        infoCadena = `La frase: "${frase}" está formada sólo por mayusculas.`;
    }else if(frase == frase.toLowerCase()){
        infoCadena = `La frase: "${frase}" está formada sólo por minusculas.`;
    }else{
        infoCadena = `La frase: "${frase}" está formada por una mezcla de ambas.`;
    }
    return infoCadena
}
console.log(minusOrMayus(frase));
document.write(minusOrMayus(frase));