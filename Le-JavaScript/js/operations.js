const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("---------------------- BIENVENUE A LA PLATEFROME DE CALCUL DES OPERATIONS ----------------------");

rl.question("Veuillez entrer le premier nombre SVP : ", function(num1) {
    rl.question("Veuillez entrer le second nombre SVP :", function(num2) {
        let addition = Number(num1) + Number(num2);
        let soustraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num1 / num2;

        console.log(`L'addition des nombres ${num1} et ${num2} est : ${addition}`);
        console.log(`La soustraction des nombres ${num1} et ${num2} est : ${soustraction}`);
        console.log(`La multiplication du nombre ${num1} par ${num2} est : ${multiplication}`);
        console.log(`La division du nombre ${num1} par ${num2} est : ${division}`);

        rl.close()

    })
})




// let num1 = +prompt("Veuillez entrer le premier nombre SVP : ");
// let num2 = +prompt("Veuillez entrer le second nombre SVP : ");

// let addition = num1 + num2;
// let soustraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;

// console.log("L'addition de " + num1 + " et " + num2 + " est : " + " " + addition);
// console.log("La soustraction de " + num1 + " et " + num2 + " est : " + " " + soustraction);
// console.log("La multiplication de " + num1 + " par " + num2 + " est : " + " " + multiplication);
// console.log("La division de " + num1 + " par " + num2 + " est : " + " " + division);














