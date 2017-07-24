/*Definition des variables*/
var score = 0;
var bouton = document.getElementById("bouton");
var affichage = document.getElementById("affichage");
var multiplicateur = 1;
var multiplier = document.getElementById("multiplier");
var multiplicateurCost = 50;
var autoClickerCost = 500;
var autoClicker = 1;


/* fonction de clique avec ajout de 1*/
function add() {
    score = score + multiplicateur;
    document.getElementById("affichage").innerHTML = score;
    document.title = "Morty est à " + score + " km";
}

/* fonction pour multiplier */
function augmenterMultiplicateur() {
    if (score >= multiplicateurCost) {

        multiplicateur = multiplicateur + 1;
        score = score - multiplicateurCost;
        multiplicateurCost = multiplicateurCost * 2;

        document.getElementById("compteur").innerHTML = "Multiplicateur x" + multiplicateur;
        document.getElementById("affichage").innerHTML = score;
        document.getElementById("prix").innerHTML = "&#8593; contre " + multiplicateurCost + " km";
    }
}

function autoClick() {
    if (score >= autoClickerCost) {

        setInterval(function() {
            document.getElementById("bouton").click();
        }, 1000);

        document.getElementById("autoClick").disabled = true;
        document.getElementById("autoclick").innerHTML = "Activé";
    }

}

function bonus() {


    document.getElementById("prixSummer").innerHTML = "Oups, ceci est un troll...";

}