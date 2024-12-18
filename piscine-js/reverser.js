function reverse(n) {
    let res = []
    for (let i= n.length-1 ; i>=0 ; i--) {
        res.push(n[i])
    }
    if (typeof(n)==="string") {
        return res.join('')
    }
    return res
}
