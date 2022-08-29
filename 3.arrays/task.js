function compareArrays(arr1, arr2) {
  let result;

  // Ваш код

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr2[i]) {
      //сравить не только типы данных но и значения
      result = true;
    } else {
      result = false;
    }
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  let resultArr = arr.filter(item => item > 0).filter(element => element % 3 === 0).map(element => element * 100)

  return resultArr; // array
}
