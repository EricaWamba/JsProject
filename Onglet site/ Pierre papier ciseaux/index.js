let contenantChoixOrdinateur = document.getElementById("choix-ordinateur");
let contenantChoixUtilisateur = document.getElementById("choix-utilisateur");
const contenantResultat = document.getElementById("resultat");

const choixPossibles = document.querySelectorAll("button");
let choixUtilisateur;
let resultat;
let choixOrdianateur;
//Evenement 'click sur les buttons'
choixPossibles.forEach((choixPossible) => {
  choixPossible.addEventListener("click", (e) => {
    //réciupération de l'Id du bouton cliqué
    choixUtilisateur = e.target.id;
    //on ajouite l'image qui correepond au choix
    // const imgElement = document.createElement('img');
    // imgElement.src = `${choixUtilisateur}.png`;
    // imgElement.alt = choixUtilisateur;
    // contenantChoixUtilisateur.appendChild(imgElement);
    let img;

    switch (choixUtilisateur) {
      case "pierre":
        img = "cailloux.jpeg";
        break;
      case "papier":
        img = "papier.jpeg";
        break;
      case "ciseaux":
        img = "ciseaux.png";
        break;
    }
    generer_choix_ordinateur();

    contenantChoixUtilisateur.innerHTML = `<img src="${img}">`;
    verification();
  });
});
//function pour generer le choix de l'ordianteur
function generer_choix_ordinateur() {
  let imgOrdinateur;
  random = Math.floor(Math.random() * 3) + 1; //Générer des nombres compris etre 1 et 3
  if (random === 1) {
    //si random = à 1:
    choixOrdianateur = "pierre";
  }
  if (random === 2) {
    //si random = à 1:
    choixOrdianateur = "papier";
  }
  if (random === 3) {
    //si random = à 1:
    choixOrdianateur = "ciseaux";
  }
  console.log(choixOrdianateur);

  switch (choixOrdianateur) {
    case "pierre":
      imgOrdinateur = "cailloux.jpeg";
      break;
    case "papier":
      imgOrdinateur = "papier.jpeg";
      break;
    case "ciseaux":
      imgOrdinateur = "ciseaux.png";
      break;
  }
  //on ajoute une image qui correspond au choix
  contenantChoixOrdinateur.innerHTML = `<img src="${imgOrdinateur}">`;
}
//function pour verifier  si le joueur a gagné ou pas
function verification() {
  if (choixUtilisateur === choixOrdianateur) {
    resultat = "Egalité !";
  }
  if (choixUtilisateur === "pierre" && choixOrdianateur === "papier") {
    resultat = "perdu !";
  }
  if (choixUtilisateur === "papier" && choixOrdianateur === "ciseaux") {
    resultat = "perdu !";
  }
  if (choixUtilisateur === "ciseaux" && choixOrdianateur === "pierre") {
    resultat = "perdu !";
  }
  //les cas ou le joueur gagne
  if (choixUtilisateur === "pierre" && choixOrdianateur === "ciseaux") {
    resultat = "Gagné  !";
  }
  if (choixUtilisateur === "ciseaux" && choixOrdianateur === "papier") {
    resultat = "Gagné !";
  }
  if (choixUtilisateur === "papier" && choixOrdianateur === "pierre") {
    resultat = "Gagné !";
  }
  contenantResultat.innerHTML = resultat;
}
