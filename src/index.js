import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import LeaderBoard from './modules/LeaderBoard.js';
import Storage from './modules/storage.js';
import loadBoardList from './modules/loadBoardList.js';

const list = Storage.getItems();
const leaderBoard = new LeaderBoard(list);
loadBoardList(list);

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  const msg = document.querySelector('.msg');
  if (name.value !== '' && score.value !== '') {
    const newLeard = { name: name.value, score: score.value };
    const lB = leaderBoard.add(newLeard);
    Storage.setItems(lB);
    loadBoardList(lB);
    name.value = '';
    score.value = '';
    msg.innerHTML = 'Succesffully publised !';
    msg.style.color = 'green';
  } else if (score.value === '' || name.value === '') {
    const msg = document.querySelector('.msg');
    msg.innerHTML = 'All fields must be filled in';
    msg.style.color = 'red';
  }
});

document.querySelector('.refresh').addEventListener('click', (e) => {
  e.preventDefault();
  loadBoardList(list);
});
