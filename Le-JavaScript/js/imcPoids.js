const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Veuillez entrer votre poids SVP : ", function(poids) {
    rl.question("Veuillez entrer votre taille SVP :", function(taille) {
        let imc = poids / (taille * taille);

        console.log(`Votre IMC est : ${imc}`);

        rl.close();
    });

    
});

// console.log("--------------------- CALCUL DE L'IMC ---------------------");
// var poids = prompt("Veuillez entrer votre poids SVP : ");
// var taille = prompt("Veuillez entrer votre taille SVP :");
// var imc = poids / (taille * taille);

// console.log("Votre imc est " + imc);