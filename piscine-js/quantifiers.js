function every(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (!x(arr[i])) 
            return false
    }
    return true
}

function some(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (x(arr[i])) 
            return true
    }
    return false
}

function none(arr, x) {
    return !some(arr, x)
}