function flat(arr, num=0) {
    let res = []
    let ks = 0
    function flatRepet(arr2) {
        if (!Array.isArray(arr2)) {
            return
        }
        for (let i = 0; i < arr2.length; i++) {
            if (Array.isArray(arr2[i]) && ks <= num ) {
                ks++
                flatRepet(arr2[i])
            } else {
                res.push(arr2[i])
            }
        }
    }
    flatRepet(arr)
    return res
}