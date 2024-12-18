export function defaultCurry(obj1) {
    return function (obj2 = {}) {
        return { ...obj1, ...obj2 }
    };
}

export function mapCurry(func) {
    return (obj) =>
        Object.fromEntries(
            Object.entries(obj).map(([key, value]) => func([key, value]))
        )
}

export function reduceCurry(reducer) {
    return (obj, initialValue) =>
        Object.entries(obj).reduce(
            (acc, [key, value]) => reducer(acc, [key, value]),
            initialValue
        )
}

export function reduceScore(entries, initialValue = 0) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(entries, initialValue)
}

export function filterCurry(predicate) {
    return (obj) =>
        Object.fromEntries(
            Object.entries(obj).filter(([key, value]) => predicate([key, value]))
        )
}

export function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj)
}

export function mapAverage(obj) {
    const avgScores = mapCurry(([key, v]) => [
        key,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj)

    Object.entries(avgScores).forEach(
        ([key, avg]) => (obj[key].averageScore = avg)
    )

    return obj
}
