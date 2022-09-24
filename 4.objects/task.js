function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student9 = new Student("Жанна", "жен", 21);
let student10 = new Student("Игорь", "муж", 19);

Student.prototype.setSubject = function(subjectName) {
  
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function(mark) {
  const marks = [];
  if(this.marks === undefined){ 

    this.marks = [mark];
    } else {
    this.marks.push(mark);
    } 
}


Student.prototype.addMarks = function(...mark) {
 if(this.marks === undefined){ 
    this.marks = mark;
    } else {
    this.marks.push(...mark);
    } 
} 



Student.prototype.getAverage = function() {

  let sum = 0;
  for (let i = 0; i < this.marks.length; i += 1) {
    sum += this.marks[i];
  }
  
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  
  delete this.subject;
  delete this.marks;

   this.excluded = reason;
}










































