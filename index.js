function main() {
  const flipCoinButton = document.getElementById("flip-button");
  const coinText = document.getElementById("coin-text");
  const coinTextHeads = coinText.querySelector(".heads");  
  const coinTextTails = coinText.querySelector(".tails");// by default it has the hidden attribute
  const coinButton = document.getElementById("coin-button");
  const coinImage = document.getElementById("coin");

  if(!flipCoinButton) return;

  const coinImages = {
    heads: "resources/icons/heads.svg", // default image
    tails: "resources/icons/tails.svg",
  };

  function flipCoin() {
    // Evita múltiples clics durante la animación
    flipCoinButton.disabled = true;

    // Reinicia animación
    coinImage.classList.remove("flip-animation");
    void coinImage.offsetWidth; // Trigger reflow para reiniciar la animación
    coinImage.classList.add("flip-animation");

    // Resultado aleatorio
    const isHeads = Math.random() < 0.5;
    const result = isHeads ? "heads" : "tails";

    // Espera al final de la animación para mostrar resultado
    setTimeout(() => {
      coinImage.src = coinImages[result];
      coinTextHeads.hidden = !isHeads;
      coinTextTails.hidden = isHeads;
      flipCoinButton.disabled = false;
    }, 2000); // Debe coincidir con duración de animación
  }

  flipCoinButton.addEventListener("click", flipCoin);
  coinButton.addEventListener("click", flipCoin);
}

document.addEventListener("DOMContentLoaded", main);