

/*
    Crea un array vuoto.
    Chiedi per 6 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array.
*/


const numero = [];


for(let i = 0; i < 6; i++){

    const numeroUtente = prompt("inserisci il numero");

    if(numeroUtente % 2 == 1){
        numero.push(numeroUtente);
    }

}

console.log(numero);