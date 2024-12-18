function fusion(obj1, obj2) {
    let res = {}
    let keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    
    for (let key of keys) {
        let val1 = obj1[key]
        let val2 = obj2[key]
        
        if (isObject(val1) && isObject(val2)) {
            res[key] = fusion(val1, val2)
        } else {
            res[key] = mergeValues(val1, val2)
        }
    }
    
    return res
}

let isObject = value => typeof value === 'object' && value !== null && !Array.isArray(value)

let mergeValues = (val1, val2) => {
    if (Array.isArray(val1) && Array.isArray(val2)) 
        return [...val1, ...val2]
    if (typeof val1 === 'number' && typeof val2 === 'number') 
        return val1 + val2
    if (typeof val1 === 'string' && typeof val2 === 'string') 
        return `${val1} ${val2}`
    return val2 !== undefined ? val2 : val1
}