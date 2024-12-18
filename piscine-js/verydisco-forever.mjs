
import { writeFile } from 'fs/promises';

function makeVeryDisco(word) {
    const midPoint = Math.ceil(word.length / 2);

    const firstPart = word.slice(0, midPoint);
    const secondPart = word.slice(midPoint);
    return secondPart + firstPart;
}
function processInput(input) {
    return input.split(' ')
        .map(word => makeVeryDisco(word))
        .join(' ');
}

const input = process.argv[2];

if (!input) {
    console.error('Please provide a word or sentence as an argument');
    process.exit(1);
}

const result = processInput(input);
try {
    await writeFile('verydisco-forever.txt', result);
} catch (error) {
    console.error('Error writing to file:', error);
    process.exit(1);
}