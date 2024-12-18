function chunk(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let str = array.slice(i, i + size)
        result.push(str)
    }
    return result
}