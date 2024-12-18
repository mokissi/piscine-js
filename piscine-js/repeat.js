function repeat(str , num) {
    if (num <= 0) {
        return ''
    }
    let res=''
    for (let i= 0 ; i<num ; i++) {
        res+=str
    }
    return res
}
console.log(repeat('a',3));
