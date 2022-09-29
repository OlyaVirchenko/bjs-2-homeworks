//Задача 1

function parseCount(el) {

	let number = Number.parseInt(el);
	
  if (isNaN(number)) {
    throw new Error('Невалидное значение');
  }
  	return number;
  }

function validateCount(el) {
  try {
  	return parseCount(el)
  } catch (error) {
     return error;
  }
}






//Задача 2

class Triangle {
	constructor (a, b, c) {		

	this.a = a;
	this.b = b;
	this.c = c;

			if (a + b < c || b + c < a || a + c < b) {
	  		throw new Error("Треугольник с такими сторонами не существует")		
		}
	}

	getPerimeter() {

		return this.a + this.b + this.c;
	}

	getArea() {
		let halfPerimeter = this.getPerimeter() / 2;
		let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
		return Number(area.toFixed(3));
	}


}
	
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		 return {
		 	getArea: function() {
		 		return 'Ошибка! Треугольник не существует'
		 	}, 
		 	getPerimeter: function()  {
		 		return 'Ошибка! Треугольник не существует'
		 	}
		 }		
	}
}





















































