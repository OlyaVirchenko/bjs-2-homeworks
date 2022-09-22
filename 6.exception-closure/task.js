//Задача 1

function parseCount(el) {
	
  if (Number.parseInt(el) === NaN) {
    throw new Error('Невалидное значение');
  }
  	return Number.parseInt(el);
  }

function validateCount(el) {
  try {
  	parseCount(el)
  } catch (error) {
     return error;
  }
}






//Задача 2

class Triangle {
	constructor (a, b, c) {
		func(a, b, c) {			
			if (a + b < c || b + c < a || a + c < b) {
	  		throw new Error("Треугольник с такими сторонами не существует")
			}
		}
	}
	getPerimeter() {
		let perimeter = a + b + c;
		return console.log("Периметр треуголиника: " + perimeter)
	}

	getArea() {
		let halfPerimeter = perimeter / 2;
		let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
		return area.toFixed(3);
	}


}
	
function getTriangle(a, b, c) {
	try {
		let triangle = new Triangle(a, b, c);
		return triangle
	} catch {
		 return triangle.getArea(), triangle.getPerimeter(), ("Ошибка! Треугольник не существует");
		
	}
}





















































