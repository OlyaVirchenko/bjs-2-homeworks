function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student9 = new Student("Жанна", "жен", 21);
let student10 = new Student("Игорь", "муж", 19);

Student.prototype.setSubject = function(subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function(mark) {
  //ваш код
  

  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
    this.marks.push(mark);
    } 
}


Student.prototype.addMarks = function(mark1, mark2, mark3...) {
  
 if(this.marks === undefined){ 
    this.marks = [mark1, mark2, mark3...];
    } else {
    this.marks.push(...marks);
    } 
} 



Student.prototype.getAverage = function() {

  sum = 0;
  for (let i = 0: i < this.marks.length; i += 1) {
    sum += this.marks[i];
  }
  
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  
  delete Student.prototype.this.subject;
  delete Student.prototype.this.marks;

   this.excluded = reason;
}










































