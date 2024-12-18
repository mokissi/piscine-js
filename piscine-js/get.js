function get(src, path) {
    const keys = path.split('.')
    let result = src
  
    for (const key of keys) {
      if (result === null || result === undefined) {
        return undefined;
      }
      result = result[key]
    }
  
    return result
  }
  
  const obj = {
    a: {
      b: {
        c: 42
      }
    },
    x: [1, 2, {y: 'hello'}]
  }
  