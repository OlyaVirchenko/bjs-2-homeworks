// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  min = Infinity;
  max = -Infinity;
  sum = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
      sum += arr[i];

    } else if (arr[i] < min) {
      min = arr[i];
      sum += arr[i];
    }  
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код

 for (let i = 0; i < arr.length; i += 1) {
   sum += arr[i];
 }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш код
  for (let i = 0; i < arrOfArr.length; i += 1) {
   let result = func(arrOfArr[i]);
   if (max < result) {
     max = result;
   }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код

  let minInArr = Math.min(...arr);
  let maxInArr = Math.max(...arr);
  difference = Math.abs(minInArr - maxInArr);

  return difference;
}












