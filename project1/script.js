const audio = document.querySelector('audio');
  const body = document.body;
  <script src='https://cdn.jsdelivr.net/npm/canvas-confetti@1/dist/confetti.browser.min.js'></script>
  audio.addEventListener('play', () => {
    body.classList.add('play-music');
  });

  audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
  });