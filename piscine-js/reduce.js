function fold(arr, f, x) {
    for (let i = 0; i < arr.length; i++) {
        x = f(x, arr[i], i, arr)
    }
    return x
}

function foldRight(arr, f, x) {
    for (let i = arr.length - 1; i >= 0; i--) {
        x = f(x, arr[i], i, arr)
    }
    return x
}

function reduce(arr, f) {
    let x = arr[0]
    for (let i = 1; i < arr.length; i++) {
        x = f(x, arr[i], i, arr)
    }
    return x
}

function reduceRight(arr, f) {
    let x = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
        x = f(x, arr[i], i, arr)
    }
    return x
}