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

/*Conditions et interactions utilisateur Jour 3*/
/*Excercice 1*/

/*let age = 20;*/
let age = 16;
if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}

/*Exercice 2 : Comprendre ===*/
let nombre = 5;
if (nombre === 5) {
    console.log("Le nombre est égal à 5.");
}
let estConnecte = true;
if (estConnecte) {
    console.log("L'utilisateur est connecté.");
}   else {
    console.log("Veuillez vous connecter pour accéder à cette fonctionnalité.");
}

/*Mini projet : Mini projet Elementor verification stock*/
let stock = 5;
let etat = document.querySelector("#etatstock");
if (stock > 0) {
    etat.textContent = "En stock";
    //document.getElementById("etatstock").textContent = "En stock";
} else {
    //document.getElementById("etatstock").textContent = "Rupture de stock";
    etat.textContent = "Rupture de stock";
}

/*defi jour 3*/
let nom = "Haingo";
let estconnecte = true;
let messsage_connexion = document.querySelector("#message_connexion");
if (estconnecte) {
    console.log(`Bienvenue, ${nom} !`);
    messsage_connexion.textContent = `Bienvenue, ${nom} !`;
} else {
    console.log("Veuillez vous connecter pour accéder à votre compte.");
    messsage_connexion.textContent = "Veuillez vous connecter pour accéder à votre compte.";
}

/*Mini défi bonus*/
let montant = 250000;
let promo = document.querySelector("#promo");

if(montant >= 200000) {
    promo.textContent = `Pour ${montant} Ar, vous bénéficiez de la livraison gratuite !`;
} else {
    promo.textContent = `Pour ${montant} Ar, la livraison est de 5000 Ar.`;
}