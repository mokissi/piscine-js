function sign(n) {
    if (n > 0) {
        return 1
    } else if (n < 0) {
        return -1
    }
    else {
        return 0
    }
}
function sameSign(x , y) {
    if (x > 0 && y > 0)   {
        return true
    }else if (x < 0 && y < 0)
 {
    return true
    
}else if (x == 0 && y == 0) {
    return true
}
return false
}
console.log(sameSign(-1,-2));