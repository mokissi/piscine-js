function filter(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (n(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!n(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function partition(arr, n) {
    return [filter(arr, n), reject(arr, n)]
}