// Carrossel de habilidades interativo
window.addEventListener('DOMContentLoaded', function () {
  const icones = document.querySelectorAll('.habilidades-icone');
  const infos = document.querySelectorAll('.habilidades-info');
  const left = document.querySelector('.habilidades-arrow-left');
  const right = document.querySelector('.habilidades-arrow-right');
  let idx = 0;

  function showHabilidade(i) {
    icones.forEach((el, j) => {
      el.style.display = i === j ? 'block' : 'none';
    });
    infos.forEach((el, j) => {
      el.style.display = i === j ? 'block' : 'none';
    });
  }

  left.addEventListener('click', function () {
    idx = (idx - 1 + icones.length) % icones.length;
    showHabilidade(idx);
  });
  right.addEventListener('click', function () {
    idx = (idx + 1) % icones.length;
    showHabilidade(idx);
  });

  showHabilidade(idx);
});
