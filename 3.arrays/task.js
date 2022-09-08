function compareArrays(arr1, arr2) {
  
  let result

  if (arr1.length ===  arr2.length) {
    return result = arr1.every((n,i) => n === arr2[i]);
  } else {
    return result = arr1.length ===  arr2.length;
   }  
  }


function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr = arr.filter(item => item > 0).filter(element => element % 3 === 0).map(element => element * 100);

  
}
