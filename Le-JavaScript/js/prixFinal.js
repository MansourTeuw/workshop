const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Veuillez entrer un prix Hors taxe :", function(prix) {
    let prixPort = 5;
    let prixTtc = (prix * 19.6) / 100 + 5;
    console.log(`Le prix TTC + 5£ est : ${prixTtc}`);

    rl.close();
});

// console.log("---------------------- BIENVENUE A LA PLATEFROME DE CALCUL DE PRIX FINAL ----------------------");

// var prix = +prompt("Veuillez entrer un prix Hors taxe :");
// var prixPort = 5
// var prixTtc = (prix * 19.6) / 100 + 5;

// console.log("Le prix TTC + 5£ est : " + prixTtc);
