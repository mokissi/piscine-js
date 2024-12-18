function makeVeryDisco(word) {
    let midPoint = Math.ceil(word.length / 2)
    let firstPart = word.slice(0, midPoint)
    let secondPart = word.slice(midPoint)
    return secondPart + firstPart
}

function processInput(input) {
    return input.split(' ')
        .map(word => makeVeryDisco(word))
        .join(' ')
}

let input = process.argv[2]

if (!input) {
    console.error('Please provide a word or sentence as an argument')
    process.exit(1);
}
console.log(processInput(input))