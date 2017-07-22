/*Definition des variables*/
var score = 0;
var bouton = document.getElementById("bouton");
var affichage = document.getElementById("affichage");
var multiplicateur = 1;
var multiplier = document.getElementById("multiplier");
var multiplicateurCost = 50;


/* fonction de clique avec ajout de 1*/
function add() {
    score = score + multiplicateur;
    document.getElementById("affichage").innerHTML = score;
    document.title = score + " km";
}

/* fonction pour multiplier */
function augmenterMultiplicateur() {
    if (score >= multiplicateurCost) {
        multiplicateur = multiplicateur + 1;
        score = score - multiplicateurCost;
        document.getElementById("compteur").innerHTML = multiplicateur;
        document.getElementById("affichage").innerHTML = score;
    }
}