let buttons = document.querySelectorAll(".btn");
let frame = document.querySelector("iframe");
let profile = document.querySelector(".profile1");

document.querySelector(".logo").addEventListener("click", function () {
  window.location.reload();
});

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    frame.style.display = "block";
    profile.style.display = "none";
    let lien = button.getAttribute("lien");
    let title = button.getAttribute("title");
    document.querySelector("#dock").innerText = title;
    console.log(lien);

    frame.src = lien;
  });
});
