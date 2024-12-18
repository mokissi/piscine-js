import { readdir } from 'fs/promises'
import { resolve } from 'path'
async function countEntries(dirPath) {
    try {
        let tar = dirPath || '.'
  
        let abs = resolve(tar)
        
        let s = await readdir(abs)
        return s.length
    } catch (error) {
        console.error('Error', error.message)
        process.exit(1);
    }
}
let dirPath = process.argv[2]
try {
    let count = await countEntries(dirPath)
    console.log(count)
} catch (error) {
    console.error('An unexpected error occurred:', error)
    process.exit(1)
}