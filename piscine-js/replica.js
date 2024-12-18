function replica(target, ...sources) {
    if (target == null) {
        target = {}
    }
  
    function isObject(item) {
      return (item && typeof item === 'object' && !Array.isArray(item))
    }
  
    function deepMerge(target, source) {
      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (isObject(target[key]) && isObject(source[key])) {
            deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key]
          }
        }
      }
    }
  
    for (let source of sources) {
      if (source != null) {
        deepMerge(target, source)
      }
    }
  
    return target
  }
