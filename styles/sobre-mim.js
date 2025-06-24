// Animação de entrada da seção Sobre mim ao rolar a página
window.addEventListener('DOMContentLoaded', function () {
  const sobreMimSection = document.querySelector('.sobre-mim-section');
  if (!sobreMimSection) return;

  // Remove estilos inline para garantir que o conteúdo aparece por padrão
  sobreMimSection.classList.remove('show-sobre-mim');
  sobreMimSection.style.opacity = '';
  sobreMimSection.style.transform = '';

  // Função para mostrar a section
  function mostrarSobreMim() {
    sobreMimSection.classList.add('show-sobre-mim');
  }

  // Suaviza o scroll ao clicar no menu
  document.querySelectorAll('a[href^="#sobre-mim"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#sobre-mim').scrollIntoView({ behavior: 'smooth' });
      setTimeout(mostrarSobreMim, 400);
    });
  });

  // Se o hash da URL for #sobre-mim ao recarregar, mostra a animação
  if (window.location.hash === '#sobre-mim') {
    setTimeout(mostrarSobreMim, 400);
  }

  // Se o usuário rolar até a section, mostra a animação
  function onScroll() {
    const rect = sobreMimSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight * 0.70) {
      mostrarSobreMim();
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Recarrega a página ao clicar em 'Home' no menu
  document.querySelectorAll('a[href="home.html"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.reload();
    });
  });
});
