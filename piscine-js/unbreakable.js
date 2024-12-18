function split(str, sep) {
    if (str.length === 0) 
        return [''];
    if (sep.length === 0) {
        const result = []
        for (let i = 0; i < str.length; i++) {
            result.push(str[i])
        }
        return result
    }

    const result = []
    let res = ''
    const x = sep.length

    for (let i = 0; i < str.length; i++) {
        if (str.substr(i, x) === sep) {
            result.push(res)
            res = ''
            i += x - 1
        } else {
            res += str[i]
        }
    }
    
    result.push(res)

    return result
}

function join(array, sep = ',') {
   
    if (array.length === 0) 
        return ''

    let result = ''

    for (let i = 0; i < array.length; i++) {
        result += array[i]

      
        if (i < array.length - 1) {
            result += sep
        }
    }

    return result
}



