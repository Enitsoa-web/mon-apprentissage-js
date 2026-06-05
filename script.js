console.log("Bonjour Haingo !");
/*Exercice 1*/

let prenom = "Haingo";
let ville = "Antananarivo";
let metier= "développeur";
console.log(prenom + " - " + ville + ' - ' + metier);
console.log("Je m'appelle " + prenom + " et j'habite à " + ville + ".");
console.log(`Je m'appelle ${prenom} et j'habite à ${ville}. et je suis ${metier}.`);
console.log(`je m'appelle ${prenom} et j'habite à ${ville.toUpperCase()}; et je suis ${metier.toUpperCase()}.`);

/*Exercice 2*/
let prix = 150000;
let devise = "Ar";
console.log(`Le prix est de ${prix} ${devise}.`);

console.log(" Le prix est de " + prix + "" + devise + ".");

/*Bonus*/
let titre = document.querySelector("h1");
console.log(titre);
console.log(titre.textContent);

/*Mini projet*/

let titre1 = document.querySelector("#titre1");
let message = document.querySelector("#message");

let heure = new Date().getHours();
console.log(heure);

if (heure >= 5 && heure < 12) {
    titre1.textContent = "Bonjour !";
    message.textContent = "Bonne matinée, bienvenue sur notre site web.";
}

else if (heure >= 12 && heure < 18) {
    titre1.textContent = "Bon après-midi !";
    message.textContent = "Profitez de votre après-midi sur notre site web.";
}

else {
    titre1.textContent = "Bonsoir !";
    message.textContent = "Bonne soirée ou bonne nuit, reposez-vous bien.";
}

/*Bonus* Mini projet*/

/*document.body.style.color = "blue";
document.body.style.fontFamily = "Arial, sans-serif";*/

document.body.style.cssText = "color: blue; font-family: Arial, sans-serif;";
