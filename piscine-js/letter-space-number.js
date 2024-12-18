function letterSpaceNumber(str) {
    const regex = /[a-z] [0-9](?=\W|$)/g
    if (str.match(regex) === null) {
        return []
    }
    return str.match(regex)
}
