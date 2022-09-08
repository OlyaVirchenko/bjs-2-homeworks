function compareArrays(arr1, arr2) {
    return arr1.length ===  arr2.length && arr1.every((n,i) => n === arr2[i]);
   }  
  


function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr = arr.filter(item => item > 0).filter(element => element % 3 === 0).map(element => element * 100);

  
}
