/* eslint-disable no-restricted-globals */
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { getScore, sendScore } from './modules/fetchScores.js';
import Storage from './modules/storage.js';
import loadBoardList from './modules/loadBoardList.js';

loadBoardList(Storage.getItems());

const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'lmYPJANHEnXMLoT04aEx';
const url = `${base}/games/${gameId}/scores`;

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  const scoreInt = parseInt(score.value, 10);
  const msg = document.querySelector('.msg');
  if (name.value !== '' && !isNaN(scoreInt)) {
    await sendScore(url, name.value, score.value);
    name.value = '';
    score.value = '';
    msg.innerHTML = 'Succesffully publised ! 🥳';
    msg.style.color = 'green';
  } else {
    const msg = document.querySelector('.msg');
    msg.innerHTML = ' 🙁 Someting went wrong !';
    msg.style.color = 'red';
  }
});

document.querySelector('.refresh').addEventListener('click', async (e) => {
  e.preventDefault();
  const leaderlist = await getScore(url);
  loadBoardList(leaderlist);
  Storage.setItems(leaderlist);
});
