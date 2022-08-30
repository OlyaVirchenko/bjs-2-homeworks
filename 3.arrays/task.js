function compareArrays(arr1, arr2) {
  let result;

    for (i = 0; i < arr2.length; i += 1) {
    result = arr1.every((n,i) => n === arr2[i])
    }
    
  return result
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  let resultArr = arr.filter(item => item > 0).filter(element => element % 3 === 0).map(element => element * 100)

  return resultArr; // array
}
