/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let numCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let nipe = ["diamond", "spade", "heart", "club"];
  let randomNumCard = numCard[Math.floor(Math.random() * numCard.length)];
  let randomNipe = nipe[Math.floor(Math.random() * nipe.length)];

  if (randomNipe === "heart" || randomNipe === "diamond") {
    let iconTop = document.createElement("i");
    iconTop.classList.add("bi", `bi-suit-${randomNipe}-fill`, "text-danger");

    let iconBottom = document.createElement("i");
    iconBottom.classList.add("bi", `bi-suit-${randomNipe}-fill`, "text-danger");

    document.querySelector(".top").innerHTML = "";
    document.querySelector(".top").appendChild(iconTop);
    document.querySelector(".bottom").innerHTML = "";
    document.querySelector(".bottom").appendChild(iconBottom);
  } else {
    let iconTop = document.createElement("i");
    iconTop.classList.add("bi", `bi-suit-${randomNipe}-fill`);
    let iconBottom = document.createElement("i");
    iconBottom.classList.add("bi", `bi-suit-${randomNipe}-fill`);

    document.querySelector(".top").innerHTML = "";
    document.querySelector(".top").appendChild(iconTop);
    document.querySelector(".bottom").innerHTML = "";
    document.querySelector(".bottom").appendChild(iconBottom);
  }

  document.getElementById("num").textContent = randomNumCard;
};

//hacer fondo verde
// crear una card blanca
//graficar la card con mazo y numero
//hacer que sea random el mazo y numero
