function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Жанна", "жен", 21);
let student2 = new Student("Игорь", "муж", 19);

Student.prototype.setSubject = function(subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function(addMark) {
  //ваш код
  this.mark = addMark;

  if(this.marks === undefined){ 
    let this.marks = [];
    this.marks.push(this.mark);
    } else {
    this.marks.push(this.mark);
    } 
}


















