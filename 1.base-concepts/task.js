"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  const discriminant = b * b - 4 * a * c;

  if (discriminant === 0) {
    return [- b / (2 * a)];

  } else if (discriminant > 0) {
    return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  }

  return arr; // array
}


"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь

 if (Number.isNaN(percent)) {
  parseInt(percent, 10);
 }


 if (Number.isNaN(contribution)) {
  parseInt(contribution, 10);
 }

 if (Number.isNaN(amount)) {
  parseInt(amount, 10);
 }

if (Number.isNaN(date)) {
  parseInt(date, 10);
 }


  
 let loanBody  = amount - contribution; 

   

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let yearDifference = date.getFullYear() - currentYear;
  let term = yearDifference * 12 - currentMonth + date.getMonth();

  let P = percent / 12 / 100;

  let oneContribution = (loanBody) * (P + (P / (((1 + P) ** term) - 1)));

  totalAmount = oneContribution * term; 
  
  return parceInt(totalAmount, 10).toFixed(2);
}





















