

/*

    Calcola la somma dei primi 10 numeri di un array.

    Calcola la somma e la media dei primi 10 numeri di un array.

    Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.
*/


let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somma = 0;

let confronto = 0;
let sostituzione = 0; 

for(let i = 0; i < numeri.length; i++){


    somma += numeri[i];

    if(confronto < numeri[i]){
        confronto = numeri[i];
    }


}

const media = somma / numeri.length;

console.log(somma);
console.log(media);
console.log(confronto);