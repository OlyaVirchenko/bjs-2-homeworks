function cachingDecoratorNew(func) {
const cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    
    const objectInCache = cache.find((item) => item.hash === hash)

    if (!objectInCache) {
      console.log("Из кэша: " + objectInCache[value])
      return "Из кэша: " + objectInCache[value];
    }

    let result = func(...args);
    wrapper.cache.push({hash: hash, value: objectInCache})
    if (wrapper.cache.length > 5) {
      wrapper.cache.shift()
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,delay) {
   let timeId = null;
   let timeCall;
   let timeStart = performance.now();
   let flug = null;
   let timePreviousCall = 0;
 
  function wrapper(...args) {
    timeCall = Math.floor(performance.now() - timeStart)
    if (flug === null) {
      console.log(finc(...args))
      flag = false
      timeId = setTimeout(() => flug = true, 2000)
    } else if (!flug) {
      if (timePreviousCall < 99) {
        timePreviousCall = 0
      } else {
        clearTimeout(timeId);
        timeId = setTimeout(() => flug = true, 2000)
      }
    } else if (flug) {
      setTimeout(() => console.log(func(..args)), delay)
    }
    timePreviousCall = timeCall
    wrapper.count += 1
  }
  wrapper.count = 0
  return wrapper;
}





















