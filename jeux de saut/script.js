var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
/* elle utise document... pour séléctionner le premier élément qui a la classe .perso et est stocké dans la variable perso*/

function sauter() {
  if (perso.classList != "animation") {
    perso.classList.add("animation");
  }
  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}
/*verifier si l'obstacle touche le personnage*/
var verification = setInterval(function () {
  var persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  var obstaclesLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );

  if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
    obstacles.style.animation = "none";
    alert("vous avez perdu");
  }
}, 1);
