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
  this.mark = mark;

  if(this.marks === undefined){ 
    this.marks = [this.mark];
    } else {
    this.marks.push(this.mark);
    } 
}


Student.prototype.addMarks() = function(mark1, mark2, mark3, ...args) {
  //ваш код
 this.marks = (...args);
 this.marks.push(args);
} 



Student.prototype.getAverage() = function(average) {
  let sum = 0;
  for (let i = 0; i < Student.keys(this.marks).length; i += 1) {
     sum += this.marks[Student.keys(this.marks)[i]].reduce((acc, item) => item + acc, 0);
   } 
  return console.log("Средний балл по всем предметам" + (sum / Student.keys(this.marks).length));
}

Student.prototype.exclude() = function(reason) {
  
  delete Student.prototype.setSubject;
  delete Student.prototype.addMark;

   this.excluded = reason;
}










































