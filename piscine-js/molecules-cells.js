function RNA(dna) {
    let rna = ''
    for (let i = 0; i < dna.length; i++) {
        const char = dna[i]
        if (char === 'G') {
            rna += 'C';
        } else if (char === 'C') {
            rna += 'G';
        } else if (char === 'T') {
            rna += 'A';
        } else if (char === 'A') {
            rna += 'U'
        } else {
            throw new Error(`Invalid DNA character: ${char}`)
        }
    }
    return rna
}

function DNA(rna) {
    let dna = ''
    for (let i = 0; i < rna.length; i++) {
        const char = rna[i]
        if (char === 'C') {
            dna += 'G';
        } else if (char === 'G') {
            dna += 'C';
        } else if (char === 'A') {
            dna += 'T';
        } else if (char === 'U') {
            dna += 'A'
        } else {
            throw new Error(`Invalid RNA character: ${char}`)
        }
    }
    return dna
}

console.log(RNA("ATCG"))
console.log(DNA("UAGC"))
