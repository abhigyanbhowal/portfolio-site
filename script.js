window.addEventListener('load', () => {
  const audio = document.getElementById('tudum-sound');

  // Trigger audio on first interaction
  const playAudioOnce = () => {
    audio.play().catch(err => {
      console.log("Audio play blocked:", err);
    });
    window.removeEventListener('click', playAudioOnce);
  };

  window.addEventListener('click', playAudioOnce);

  // Proceed with splash screen hiding
  setTimeout(() => {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.section-selector').classList.add('visible');
  }, 3000);
});
