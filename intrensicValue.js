let indianIntrinicValue = (EPS, annualGrowthRate) => {

    //[EPS × (7 + g) × 8.5]/Y
    let g = annualGrowthRate
    let Yield_on_AAA_rated_corporate_bonds = 8.3
    let intrinsicValue = (EPS * (7 + g) * 8.5) / Yield_on_AAA_rated_corporate_bonds
    return intrinsicValue
}

let grahamOriginalValue = (EPS, annualGrowthRate) => {

    //[EPS × (8.5 + 2g) × 4.4]/Y
    let g = annualGrowthRate
    let Yield_on_AAA_rated_corporate_bonds = 1.89
    let intrinsicValue = (EPS * (8.5 + (2 * g)) * 4.4) / Yield_on_AAA_rated_corporate_bonds
    return intrinsicValue
}

let tatamotors = indianIntrinicValue(-24.15, 14.94)
console.log(tatamotors)
let tatamotors2 = grahamOriginalValue(-24.15, 14.94)
console.log(tatamotors2)

//https://www.valueresearchonline.com/stories/27759/the-ben-graham-way/