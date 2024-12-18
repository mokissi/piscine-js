function slice(arr, slice, end = arr.length) {
    let result = [];
    if (slice < 0) {
        slice = arr.length + slice;
    }
    if (end=== 0) {
        end = arr.length;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    for (let i = slice; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    if (typeof arr === 'string') {
        return result.join('');
    }
    return result;
}


