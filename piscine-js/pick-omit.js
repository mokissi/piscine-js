function pick(obj, keys) {
    const pic = {}
    keys = Array.isArray(keys) ? keys : [keys]
    for (let key of keys) {
        if (key in obj) {
            pic[key] = obj[key]
        }
    }
    return pic;
}

function omit(obj, keys) {
    const omi = { ...obj }
    keys = Array.isArray(keys) ? keys : [keys]
    for (let key of keys) {
        delete omi[key]
    }
    return omi
}
