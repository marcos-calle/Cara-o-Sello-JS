const monedaDiv = document.getElementById("moneda");
const play = document.getElementById("play");
let estilo = "";
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

  estilo = valor === "sello" && "sello";
  if (valor === "sello") {
    monedaDiv.classList.add(valor);
    return;
  }
  monedaDiv.classList.remove("sello");
});
