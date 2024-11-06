document.addEventListener('mousemove', function(e) {
  const curseur = document.getElementById('curseur-cercle');
  curseur.style.left = e.pageX + 'px';
  curseur.style.top = e.pageY + 'px';
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const curseur = document.getElementById('curseur-cercle');
    curseur.style.transform = 'translate(-50%, -50%) scale(1.4)';
    curseur.classList.add('agrandi');
  });
  link.addEventListener('mouseleave', () => {
    const curseur = document.getElementById('curseur-cercle');
    curseur.style.transform = 'translate(-50%, -50%) scale(1)';
    curseur.classList.remove('agrandi');
  });
});