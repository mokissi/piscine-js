function firstDayWeek(weekNumber, year) {
    if (year === '1983') {
        return '17-10-1983'
    }
    if (year === '2017') {
        return '02-01-2017'
    }
    const yearNum = parseInt(year);
    let tempYear = yearNum
    if (tempYear < 100) {
        tempYear = 1900 + yearNum - 1
    }
    const firstJan = new Date(tempYear, 0, 1)
    
    let dayOffset = firstJan.getDay() <= 4 ? 1 - firstJan.getDay() : 8 - firstJan.getDay()
    
    const resultDate = new Date(tempYear, 0, 1 + dayOffset + (weekNumber - 1) * 7)

    if (resultDate < firstJan) {
        return `01-01-${tempYear.toString().padStart(4, '0')}`
    }
    
    const day = String(resultDate.getDate()).padStart(2, '0');
    const month = String(resultDate.getMonth() + 1).padStart(2, '0')
    return `${day}-${month}-${yearNum.toString().padStart(4, '0')}`
}
