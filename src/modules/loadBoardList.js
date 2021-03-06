const loadBoardList = (obj) => {
  const output = document.querySelector('.output');
  output.innerHTML = '';
  obj.forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `${item.user} : ${item.score}`;
    output.appendChild(tr);
  });
};

export default loadBoardList;
