const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




console.log("----------------------- BIENVENUE -----------------------");
console.log("");

rl.question("Veuillez entrer votre prénom : ", function(prenom) {
    rl.question("Veuillez entrer votre nom : ", function(nom) {
        rl.question("Veuillez saisir votre année de naissance : ", function(anneeNaiss) {
            let anneeActuelle = 2021;
            let age = anneeActuelle - anneeNaiss;
            console.log(`Bonjour ${prenom} ${nom} tu as ${age} ans cette année`);
            rl.close();

        });
    });
});

rl.on("close", function() {
    console.log("\nEvaluation Terminée avec succès!!!");
    console.log("\nBYE BYE !!!");
    process.exit(0);
})

// let prenom = prompt("Veuillez entrer votre prénom : ");
// let nom = prompt("Veuillez entrer votre nom : ");
// let anneNaissance = +prompt("Veuillez entrer votre année de naissance : ");
// let cetteAnne = 2021;
// let age = cetteAnne - anneNaissance;

// alert(`Bonjour ${prenom} ${nom} tu as ${age} ans cette année`)

// console.log(`Bonjour ${prenom} ${nom} tu as ${age} ans cette année`);



// console.log(film1);
