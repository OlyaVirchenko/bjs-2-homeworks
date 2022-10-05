function cachingDecoratorNew(func) {
const cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    
    const objectInCache = cache.find((item) => item.hash === hash)

    if (!objectInCache) {
      console.log("Из кэша: " + objectInCache.value)
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    
    cache.push({hash: hash, value: result})

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
    wrapper.allCount += 1;

    if (wrapper.count === 1) {
     func(...args);
     wrapper.count += 1;
    }
    
    const timerId = setTimeout(() {
      func(...args);
      wrapper.count += 1;
    }, delay);
  }

  wrapper.allCount = 0
  wrapper.count = 0;
  return wrapper;
}






















