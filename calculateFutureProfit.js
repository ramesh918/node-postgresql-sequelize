// Formula for calculating future value return in simple terms profit

let currentYearEPS, lastYearEPS;
currentYearEPS = -2.5
lastYearEPS = -2.18


let growthRate = calculatingGrowthRate(currentYearEPS, lastYearEPS)

let profit = currentYearEPS * (8.5 + 2 * growthRate)

console.log("profit", profit)


function calculatingGrowthRate(currentYearEPS, lastYearEPS) {


    let ratio = currentYearEPS / lastYearEPS
    let diff = (ratio - 1)
    return diff * 100
}