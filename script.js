window.addEventListener('load', () => {
  const audio = new Audio('netflix_tudum.mp3');

  // Wait for user interaction to trigger audio
  const playAudioOnce = () => {
    audio.play().catch(err => {
      console.log("Audio play blocked:", err);
    });
    window.removeEventListener('click', playAudioOnce);
  };
  window.addEventListener('click', playAudioOnce);

  setTimeout(() => {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.section-selector').classList.add('visible');
  }, 3000); // Wait for 3 seconds before showing sections
});
