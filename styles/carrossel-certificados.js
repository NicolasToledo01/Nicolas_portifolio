document.addEventListener("DOMContentLoaded", function () {
  const lista = document.querySelector(".certificados-lista");
  const items = document.querySelectorAll(".certificado-item");
  const setaEsq = document.getElementById("seta-esquerda");
  const setaDir = document.getElementById("seta-direita");
  let current = 0;

  function updateCarrossel() {
    lista.style.transform = `translateX(-${current * items[0].offsetWidth}px)`;
  }

  setaEsq.addEventListener("click", function () {
    if (current > 0) {
      current--;
      updateCarrossel();
    }
  });

  setaDir.addEventListener("click", function () {
    if (current < items.length - 1) {
      current++;
      updateCarrossel();
    }
  });

  // Responsivo: atualiza ao redimensionar
  window.addEventListener("resize", updateCarrossel);
});
