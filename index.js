function main() {
  const flipCoinButton = document.getElementById("flip-coin");
  const coinText = document.getElementById("coin-text");
  const coinTextHeads = coinText.querySelector(".heads");  
  const coinTextTails = coinText.querySelector(".tails");// by default it has the hidden attribute
  const coinImage = document.getElementById("coin");

  flipCoinButton.addEventListener("click", () => {
    console.log("Flip coin button clicked");
  });
  const coinImages = {
    heads: "resources/icons/heads.svg", // default image
    tails: "resources/icons/tails.svg",
  };
}

document.addEventListener("DOMContentLoaded", main);