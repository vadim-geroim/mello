class Card {
  constructor(text) {
    this.text = text;
    this.id = ++Card.lastId;
  }
}

Card.lastId = 0;

class List {
  constructor(title) {
    this.title = title;
    this.id = ++List.lastId;
    this.cards = [];
  }

  addCard(text) {
    var card = new Card(text);
    this.cards.push(card);
  }

  findCard(cardId) {
    return this.cards.find(function(card) {
      if (card.id === cardId) {
        return card;
      }
    });
  }
}

List.lastId = 0;

class Board {
  constructor() {
    this.id = ++Board.lastId;
    this.lists = [];
  }

  findList(listId) {
    return this.lists.find(function(list) {
      if (list.id === listId) {
        return list;
      }
    })
  }

  editCard(cardId, cardText) {
    this.lists.forEach(function(list) {
      var card = list.findCard(cardId);
      if (card) {
        card.text = cardText;
      }
    });
  }

  editList(listId, newTitle) {
    var list = this.findList(listId);
    if (list) {
      list.title = newTitle;
    }
  }

  addList(text) {
    var list = new List(text);
    this.lists.push(list);
  }

  addCard(listId, cardText) {
    var list = this.findList(listId);
    if (list) {
      list.addCard(cardText);
    }
  }
}

Board.lastId = 0;