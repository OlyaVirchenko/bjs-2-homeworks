//Задача 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount =pagesCount;
    this.state = 100;
    this.type = null;
  }  

  fix() {return this.state * 1,5;}

  set newState(number) {
  	if (this.state < 0) {
  		return this.state = 0;
  	} else if (this.staste > 100) {
  		return this.state = 100;
  	} else {
        return this.state = number;  
  	}
  }

  get stateProperty() {
  	return this.state;
  }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
      super(type);
      this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type, author) {
      super(type);
      this.type = "book";
      this.author = author;
  }
}


class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, state, type, author) {
      super(type);
      this.type = "novel";
  }
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, state, type, author) {
      super(type);
      this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, state, type, author) {
      super(type);
      this.type = "detective";
  }
}

//Задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.book = books;
	}

	addBook(book){
		if (this.state > 30){
			books.push(book);
		}
	}

	findBookBy(type, value) {
		if (books.includes(this.type, this.value) = true) {
			return this.book;
		}
		return null;
	}

	giveBookByName(bookName) {
		if (books.includes(this.bookName) = true) {

		}
	}
}



















	

