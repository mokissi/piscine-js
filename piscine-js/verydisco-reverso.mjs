import { readFile } from 'fs/promises';

function reverseVeryDisco(word) {
    for (let i = 1; i < word.length; i++) {
   
    const firstPart = word.slice(0, i)
        const secondPart = word.slice(i)
    
        const reconstructed = secondPart + firstPart
       
        const midPoint = Math.ceil(reconstructed.length / 2)
        const veryDisco = reconstructed.slice(midPoint) + reconstructed.slice(0, midPoint)
        
        if (veryDisco === word) {
            return reconstructed
        }
    }
    return word
}
function processInput(input) {
    return input.trim().split(' ')
        .map(word => reverseVeryDisco(word))
        .join(' ')
}

const filename = process.argv[2]

if (!filename) {
    console.error('Please provide a filename as an argument')
    process.exit(1)
}

try {
    const fileContent = await readFile(filename, 'utf8')
    const result = processInput(fileContent)
    console.log(result)
} catch (error) {
    console.error('Error reading or processing file:', error)
    process.exit(1)
}