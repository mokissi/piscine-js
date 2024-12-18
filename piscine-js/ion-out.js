function ionOut(str) {
    const regex = /[a-z]*(t)(?=ion)/g
    if (str.match(regex) === null) {
        return []
    }
    return str.match(regex)
}



