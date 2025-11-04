/* 🌐 Navegación suave entre secciones */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

/* ✨ Animación de aparición de las tarjetas */
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.transition = 'transform 0.6s ease, opacity 0.6s';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

/* Inicializa la opacidad para efecto de fade-in */
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
});
