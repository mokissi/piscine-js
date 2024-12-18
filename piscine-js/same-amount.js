function sameAmount(str, reg1, reg2) {

    let ks = new RegExp(reg1, 'g')
    let ks1 = new RegExp(reg2, 'g')

    let x = str.match(ks)
    let y = str.match(ks1)

    if( y !== null && x !== null && x.length === y.length ) {
        return true 
    }
    return false
}