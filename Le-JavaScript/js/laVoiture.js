console.log("------------------------------ VOITURE ------------------------------");

let voiture = {
    marque: "Toyota",
    model: "toyo-Yary-",
    abs: true,
    finition: {
        couleur: "rouge",
        option: "turbo",
        tableauChrome: ["devant", "derrière", "malle"]
    },
    kilometrage: 200
};

console.table(voiture);
console.log(voiture.marque);
console.log(voiture.finition.couleur);
console.log(voiture.kilometrage);
console.log(voiture.abs);
console.log(voiture.finition.tableauChrome[1]);

voiture.kilometrage = voiture.kilometrage + 500;
console.log(voiture.kilometrage);

voiture.abs = false;
console.log(voiture.abs);

voiture. model = voiture.model + 2020;
console.log(voiture.model);