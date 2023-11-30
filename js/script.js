/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//elementi richiamati
const simonButton = document.getElementById("simon-btn");
const simonNums = [];


//creo 5 numeri casuali e li faccio visualizzare in pagina

//faccio funzionare il bottone con la generazione dei numeri
simonButton.addEventListener("click",

    function () {

        //genero i 5 numeri
        const randomNums = arreySimonNum(0, 100, 5);
        console.log(randomNums);
    }
);














//funzione che genera i numeri voluti
function numbersMinMax (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che crea i numeri
function arreySimonNum (minNum, maxNum, lunghezzaArr) {

   //riempio l'array
   while (simonNums.length < lunghezzaArr) {

    let randomNums = numbersMinMax (minNum, maxNum);

        if (!simonNums.includes(randomNums)) {
            simonNums.push(randomNums);
        }
    }
    return simonNums;
}