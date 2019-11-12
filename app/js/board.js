class Card {
  constructor(text) {
    this.text = text;
  }
}

class List {
  constructor(title) {
    this.title = title;
    this.cards = [];
  }

  addCard(text) {
    var card = new Card(text);
    this.cards.push(card);
  }
}

class Board {
  constructor() {
    this.lists = [];
  }

  addList(text) {
    var list = new List(text);
    this.lists.push(list);
  }
}