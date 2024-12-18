function adder(arr, value=0) {
    return arr.reduce(
        (x, y) => x + y,
        value++
    )
    }

function sumOrMul(arr, value=0) {
    return arr.reduce(
        (x, y) => {
            if (y % 2 === 0) {
                return x * y
            } else {
                return x + y
            }
            
        },
        value++
       
    )
}

function funcExec(arr, value=0) {
    return arr.reduce((x, y) => {
            if (typeof y === "function") {
                return y(x, value)
            } else {
                return x
            }
        },
        value++
    )
}