function pronoun(str) {
    let obj = {}
    const pronounKey = ["i", "you", "he", "she", "it", "they", "we"]
    str = str.toLowerCase()
    const words = str.split(/\s+/)
    for (let i = 0; i < words.length; i++) {
        if (pronounKey.includes(words[i])) {
            if (!obj[words[i]]) {
                obj[words[i]] = {word: [], count: 0}
            }
            obj[words[i]].count++
            if (i + 1 < words.length && !pronounKey.includes(words[i + 1])) {
                const nextWord = words[i + 1].replace(/[^a-z]/gi, '')
                if (nextWord) {
                    obj[words[i]].word.push(nextWord)
                }
            }
        }
    }
    return obj
}
