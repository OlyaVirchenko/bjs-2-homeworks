//Задача 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount =pagesCount;
    this.state = state;
    this.type = type;
  }  

  fix() {return this.state *= 1.5}

  set state(number) {
  	if (number < 0) {
  		return this._state = 0;
  	} else if (number > 100) {
  		return this._state = 100;
  	} else {
        return this._state = number;  
  	}
  }

  get state() {
  	return this._state;
  }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
  }
}


class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
  }
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
  }
}

//Задача 2


class Library {
	
	constructor(name) {
		this.name = name;
    
		this.books = [];
		
	}

	addBook(book){
		if (book.state > 30){
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i += 1) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		
		return null;
	}

	giveBookByName(bookName) {
		let book = this.books.find(book => book.name ===bookName);

		if (book === undefined) {
			return null
		} else {
			this.books.splice(this.books.indexOf(book), 1);
			return book
		}
	}
}



















	

