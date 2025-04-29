let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');

function shortLinkFunct(){
    // verification input
    if(!longLink.value == ""){

        // vider l'error
        error.innerHTML = "";

        // connection API
        let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;// lien API en description
        fetch(url)
        .then(response => response.text())
        .then((data) => {
            if(data == "error"){
                short.innerHTML = "lien invalide";
            }else{
                short.innerHTML = data;
            }
        });

        // afficher le resultat
        short.style.display = "block";

        if(short.innerHTML.length == 0){
            short.innerHTML = "lien non valide !" 
        }
    }else{
        // error
        error.innerHTML = "Veuillez remplir le champ !";
        short.style.display = "none";
    }
}