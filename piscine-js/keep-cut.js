function cutFirst(n) {
    return n.slice(2)
}
function cutLast(n) {
    return n.slice(0, n.length-2)
}
function cutFirstLast(n) {
    let s1 = cutFirst(n)
    return cutLast(s1)
}
function keepFirst(n) {
    return n.slice(0, 2)
}
function keepLast(n) {
    return n.slice(-2)
}

function keepFirstLast(n) {
    if (n.length < 5) {
        return n
    }
    return keepFirst(n) + keepLast(n)
}
