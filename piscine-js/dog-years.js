function dogYears(planet, age) {
    let planetyrs = 0
    if (planet === "mercury") {
        planetyrs = (31557600) * 0.2408467
    }
    else if (planet === "venus")
    {
        planetyrs = (31557600) * 0.61519726
    }
    else if  (planet === "mars")  {
        planetyrs = (31557600) * 1.8808158
    }
    else if (planet === "jupiter") {
        planetyrs = (31557600) * 11.862615
    }
    else if (planet === "saturn") {
        planetyrs = (31557600) * 29.447498
    }
    else if (planet === "uranus") {
        planetyrs = (31557600) * 84.016846
    }
    else if (planet === "neptune") {
        planetyrs = (31557600) * 164.79132
    }
    else {
        planetyrs = 31557600
    }
    let dogs = (age / planetyrs)*7
    return +dogs.toFixed(2)
}
console.log(dogYears("", 1000000000))