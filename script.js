// ============ SCROLL REVEAL ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .tool, .flow-item, .info-block, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============ HEADER SHADOW ON SCROLL ============
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ============ FORM ============
function enviarMensagem() {
  alert('✅ Mensagem enviada com sucesso!\nEm breve entraremos em contato para prototipar sua ideia.');
  document.querySelector('.form').reset();
}

// ============ SMOOTH NAV HIGHLIGHT ============
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
