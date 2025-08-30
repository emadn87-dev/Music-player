const audio = new Audio('audio/escalon.mp3');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const seekBar = document.getElementById('seekBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

let isPlaying = false;

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
  seekBar.max = Math.floor(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  seekBar.value = Math.floor(audio.currentTime);
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

playBtn.addEventListener('click', () => {
  isPlaying ? audio.pause() : audio.play();
});

audio.addEventListener('play', () => {
  isPlaying = true;
  playBtn.className = 'fa-solid fa-pause';
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playBtn.className = 'fa-solid fa-play'; 
});

seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value;
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
