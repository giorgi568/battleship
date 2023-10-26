import './style.css';
import { initializePlayer } from './initializePlayer';
import { initializeStartingPage } from './initializeStartingPage';

initializeStartingPage();
initializePlayer();

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
  const nameInput = document.getElementById('nameBox');
  if (nameInput.value.length > 1 && nameInput.value.length < 20) {
    const mainContent = document.getElementById('main_content');
    mainContent.textContent = '';
  }
});
