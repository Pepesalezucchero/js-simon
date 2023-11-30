/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//elementi richiamati
const simonDiv = document.querySelector(".simon-says");
const simonButton = document.getElementById("start-btn");
const userDiv = document.querySelector(".user-btn");
const userButton = document.getElementById("end-btn");
const simonNums = [];
const userNums = [];
let timeSimon = 1;
let randomNums;

//faccio funzionare il bottone con la generazione dei numeri
simonButton.addEventListener("click",

    function () {

        //aggiungo il timer di 30 secondi e faccio sparire i numeri generati automaticamente
        setTimeout(function () {
            simon.classList.add("inactive");
            simonDiv.append(simon);
            //compare l'input per l'utente e il bottone
            userDiv.classList.remove("inactive");
        }, timeSimon * 1000);
        
        //genero i 5 numeri
        randomNums = arreySimonNum(0, 100, 5);
        console.log(randomNums);

        //creo i numeri sulla pagina
        const simon = document.createElement("p");
        simon.classList.add("pc-numbers");
        simonDiv.append(simon);
        simon.append("Simone ha detto: ", randomNums);
    }
);

//cotrollo delle due serie di numeri
userButton.addEventListener("click",

    function () {
        //chiedo all'utente di rispondere
        alert("Miraccomando, pensaci bene ed inserisci un numero alla volta e in ordine come erano. Fai attenzione queste operazioni sono irreversibili :)");
        userNums.push(parseInt(prompt("Iserisci il primo numero")));
        userNums.push(parseInt(prompt("Iserisci il secondo numero")));
        userNums.push(parseInt(prompt("Iserisci il terzo numero")));
        userNums.push(parseInt(prompt("Iserisci il quarto numero")));
        userNums.push(parseInt(prompt("Iserisci il quinto numero")));
        
        console.log(userNums);

        //transformo e unisco i due array in stringhe
        const simonNumControl = simonNums.join("");
        const userNumcontrol = userNums.join("");
        console.log(simonNumControl);
        console.log(userNumcontrol);

        //controllo come sono i due risultati

        //in caso di ugual risultato
        if (userNumcontrol === simonNumControl) {
            alert("Bestia bravo! Hai risposto giusto!");
          //in caso di risultato diverso
        } else {
            alert("Maleee, molto male! Hai sbagliato chicco riprova");
        }

        //scrittura del risultato su pagina
        const playSimonResult = document.getElementById("simon-result");
        playSimonResult.innerHTML = `<span>Numeri di Simone: ${randomNums} </span>`;
        const playerResult = document.getElementById("your-result");
        playerResult.innerHTML = `<span>Tuoi numeri: ${userNums} </span>`;
    }
)

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