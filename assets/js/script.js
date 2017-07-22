/*Definition des variables*/
var score = 0;
var bouton = document.getElementById("bouton");
var affichage = document.getElementById("affichage");
var multiplicateur = 1;


/* fonction de clique avec ajout de 1*/
function add() {
    score = score + 1;
    document.getElementById("affichage").innerHTML = score;
}

/* fonction pour multiplier */
function augmenterMultiplicateur() {

}