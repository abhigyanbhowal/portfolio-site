window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.section-selector').classList.add('visible');
  }, 3000); // Wait for 3 seconds before showing sections
});
