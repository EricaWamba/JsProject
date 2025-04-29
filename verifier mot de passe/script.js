//Definir les variables//
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
//lorsue l'utilisateur clique sur le  champ du mot de passe,afficher la boite message
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};
//lorsque l'utilisateur clique en dehors de champ du mot de passe masquer la boite de dialogue
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};
//lorsque l'utilisateur commence à taper quelque chose dans  le camp mot de passe
myInput.onkeyup = function () {
  //valider les lettres miniscules
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    //si le mot de passe contient une lettre miniscule; enlever la classe "invalid et ajouter la clase valid"
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    //enlever la clase "valid" et ajouter la classe "invalid"
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  //valider les lettres majuscules
  var upperCaseLetters = /[A-z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    //si le mot de passe contient une lettre majuscule; enlever la classe "invalid et ajouter la clase valid"
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    //enlever la clase "valid" et ajouter la classe "invalid"
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  //valider les nombres
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    //si le mot de passe contient un chiffre; enlever la classe "invalid et ajouter la clase valid"
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    //enlever la clase "valid" et ajouter la classe "invalid"
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  //valider les nombres
  var numbers = /[0-9]/g;
  if (myInput.value.length >= 8) {
    //si le mot de passe contient minimum 8 caractéres ; enlever la classe "invalid et ajouter la clase valid"
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    //enlever la clase "valid" et ajouter la classe "invalid"
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
