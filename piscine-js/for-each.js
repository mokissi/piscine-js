function forEach(array, x) {
    for (let i = 0; i < array.length; i++) {
        x(array[i], i, array)
    }
}