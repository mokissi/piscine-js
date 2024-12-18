function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
        return value
    }

    if (value instanceof Date) {
        return new Date(value)
    }
    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags)
    }
    if (typeof value === 'function') {
        return value
    }

    const res = Array.isArray(value) ? [] : {}
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            res[key] = deepCopy(value[key])
        }
    }

    return res
}
