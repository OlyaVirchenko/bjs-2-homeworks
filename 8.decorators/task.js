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
    cache.push({hash: hash, value: objectInCache})
    if (cache.length > 5) {
      cache.shift()
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,delay) {

  wrapper.count += 1
   
  function wrapper(...args) {
    if ( wrapper.count = 1) {
     delay = 0;
    }
    
    setTimeout(() => console.log(func(...args)), delay);
  }


  wrapper.count = 0
  return wrapper;
}






















