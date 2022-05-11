import Storage from './storage.js';

export default class FetchScores {
  static getScore(url) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        Storage.setItems(json.result);
        const output = document.querySelector('.output');
        output.innerHTML = '';
        json.result.forEach((item) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `${item.user} : ${item.score}`;
          output.appendChild(tr);
        });
      });
  }

  static sendScore(url, user, score) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json.result);
  }
}
