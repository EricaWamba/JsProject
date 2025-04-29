var nb1 = document.querySelector(".nb1");
var nb2 = document.querySelector(".nb2");
var op = document.querySelector(".op");
var Message = document.querySelector(".Message");
var score = document.querySelector(".score");
var link = document.querySelector(".link");
var section = document.querySelector("section");
var compteur = 0;

//nombres aléatoires Début du jeu
random1 = (Math.random() * 11) << 0; //pour générer des nombres entre 0 et 11
random2 = (Math.random() * 11) << 0; // pour générer des nombres entre 0 et 11
console.log(random1);
console.log(random2);

//Inserer des nombres au hasard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;
//function de verification
function vérifier() {
  //Récupérer le résultat entré par le joueur;
  var res = document.querySelector(".res").value;
  if (random1 + random2 == res) {
    Message.style.background = "green";
    Message.innerHTML = "Correcte.";
    //créer d'autres nombres aléatoires

    //nombres aléatoires Début du jeu
    random1 = (Math.random() * 11) << 0; //pour générer des nombres entre 0 et 11
    random2 = (Math.random() * 11) << 0; // pour générer des nombres entre 0 et 11
    console.log(random1);
    console.log(random2);

    //Inserer des nombres au hasard dans les variables nb1 et nb2
    nb1.innerHTML = random1;
    nb2.innerHTML = random2;
    //function de verification
    compteur = compteur + 1;
  } else {
    Message.style.background = "red";
    Message.innerHTML = "vous avez perdu.";
    section.innerHTML = " ";
    score.innerHTML = `<span>${compteur}</span><br/> Score`; //(Attention ce signe est donné par la combinaison "ALTGR + 7 alphanumerique"
    // " )
    link.style.display = "block";
  }
}
