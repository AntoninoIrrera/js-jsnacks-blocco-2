

/*

    Calcola la somma dei primi 10 numeri di un array.

    Calcola la somma e la media dei primi 10 numeri di un array.

    Calcola la somma, la media e il valore massimo (e minimo(parte mia)) dei primi 10 numeri di un array.
*/


let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somma = 0;

let confrontoMassimo = numeri[0];

let confrontoMinimo = numeri[0];


for(let i = 0; i < numeri.length; i++){


    somma += numeri[i];
        // numeri[i] > confrontoMassimo
    if(confrontoMassimo < numeri[i]){
        confrontoMassimo = numeri[i];
    }
        // numeri[i] < confrontoMinimo
    if(confrontoMinimo > numeri[i]){
        confrontoMinimo = numeri[i]
    }


}

const media = somma / numeri.length;

console.log(somma);
console.log(media);
console.log(confrontoMassimo);
console.log(confrontoMinimo);
