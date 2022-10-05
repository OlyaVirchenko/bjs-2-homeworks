function cachingDecoratorNew(func) {
const cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    
    const objectInCache = cache.find((item) => item.hash === hash)

    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value)
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result2})

    if (cache.length > 5) {
      cache.shift()
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,delay) {

  
   
  function wrapper(...args) {
    clearTimeout(timerId)

    if ( wrapper.count === 1) {
     func()
     wrapper.count += 1;
    }
    
    const timerId = setTimeout(() {
      console.log(func(...args));
      wrapper.count += 1;
    }, delay);
  }


  wrapper.count = 0
  return wrapper;
}






















