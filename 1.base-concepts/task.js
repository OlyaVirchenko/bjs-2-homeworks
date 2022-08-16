"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let discriminant = b * b - 4 * a * c;

  let x1;
  let x2;

  if (discriminant < 0) {
    arr = [];

  } else if (discriminant == 0) {
    x1 = -b / (2 * a);

    arr = [x1];

  } else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    arr = [x1, x2];
  }

  return arr; // array
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
