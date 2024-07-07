const monedaDiv = document.getElementById("moneda");
const play = document.getElementById("play");
const spanHeads = document.getElementById("countHeads");
const spanTails = document.getElementById("countTails");
let countHeads = 0;
let countTails = 0;
const moneda = {
  0: "cara",
  1: "sello",
};

const lanzarMoneda = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(moneda[Math.floor(Math.random() * 2)]);
    }, 3000);
  });
};

play.addEventListener("click", async () => {
  monedaDiv.classList.add("moneda-animation");
  const valor = await lanzarMoneda();
  monedaDiv.classList.remove("moneda-animation");
  if (valor === "sello") {
    monedaDiv.classList.add(valor);
    countTails++;
    spanTails.innerText = countTails;
    return;
  }
  countHeads++;
  console.log(countTails, countHeads);
  monedaDiv.classList.remove("sello");
  spanHeads.innerText = countHeads;
});
