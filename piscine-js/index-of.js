function indexOf(arr , val , num) {
    let size = arr.length
    if (num === undefined) {
        num = 0
    }
    for (let i=num; i < size; i++) {
        if (arr[i]===val) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr , val , num) {
    if (num === undefined) {
        num = arr.length
    }
    for (let i=num; i >= 0; i--) {
        if (arr[i]===val) {
            return i
        }
    
    }
    return -1
}

function includes(arr , val, num) {
    if (num === undefined) {
        num = 0
    }
    for  (let i=num; i<arr.length ; i++){
        if (arr[i]===val) {
            return true
        }
        
    }
    return false
    
}
