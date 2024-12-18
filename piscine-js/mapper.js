function map(arr, x) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(x(arr[i], i, arr))
    }
    return res
}

function flatMap(arr, y) {
    return arr.reduce(
        (x, v, i, arr) => x.concat(y(v, i, arr)),
        []
    )
}cities.includes(city)