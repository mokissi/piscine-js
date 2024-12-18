function filterEntries(obj, filter) {
    return Object.fromEntries(
        Object.entries(obj).filter(filter)
    )
}

function mapEntries(entries, mapper) {
    return Object.fromEntries(
        Object.entries(entries).map(mapper)
    )
}

function reduceEntries(entries, reducer, initialValue) {
    return Object.entries(entries).reduce(reducer, initialValue)
}
 
function lowCarbs(entries) {
    return filterEntries(entries, ([key, qty]) => {
        let carbs = (nutritionDB[key]["carbs"] / 100) * qty
        return Math.floor(carbs) <= 50
    });
}

function totalCalories(entries) {
    let total = reduceEntries(entries, (acc, [key, qty]) => {
        let calories = (nutritionDB[key]["calories"] / 100) * qty
        return acc + calories
    }, 0);
    return Number(total.toFixed(1))
}

function cartTotal(entries) {
    let result = {}
    for (let key in entries) {
        result[key] = {};
        for (let nutrient in nutritionDB[key]) {
            let value = (entries[key] / 100) * nutritionDB[key][nutrient]
            result[key][nutrient] = Math.round(value * 1000) / 1000
        }
    }
    return result
}
