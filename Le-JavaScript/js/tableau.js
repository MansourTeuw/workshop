console.log("------------------------------ TABLEAU ------------------------------");

let sf = ["Star Trek", "Timeless", "Another Life", "Love Death & Robots"];
let comedies = ["How I Met Your Mother", "The Big Bamg Theory", "Norsmen", "Archer"];
let anime = ["Rick & Morty", "Boruto", "Tokyo Ghoul", "Death Note"];

let netflix = [sf, comedies, anime];
console.table(netflix);

netflix[0].splice(2, 0, " Star Wars", "Armageddon");
console.log(netflix[0]);

netflix[1][2] = "Marié 2 enfants et Notre Belle Famille";
console.log(netflix[1]);

netflix[0].push("Dune");
console.log(netflix[0]);

netflix[2].unshift(" Attaque des titans");
console.log(netflix[2]);

suprimDeathNote = netflix[2].pop();
console.log(suprimDeathNote);

console.log(netflix[2]);

