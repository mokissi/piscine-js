export function filterKeys(obj, predicate) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => predicate(key))
    );
  }
  
  export function mapKeys(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [callback(key), value])
    )
  }
  
  export function reduceKeys(obj, callback, initialValue) {
    let undef = false
    if (initialValue === undefined) {
        initialValue = ""
        undef = true
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue)
    }, initialValue)
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2)
        if (undef && res[0] === ":") res = res.slice(1)
    }
    return res
}