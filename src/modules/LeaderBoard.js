export default class LeaderBoard {
  constructor(board){
    this.board = board;
  }

  add(newLeard){
    this.board.push(newLeard);
    return this.board
  }

}
