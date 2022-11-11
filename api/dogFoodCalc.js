/* DATA */
const dogFoodBrands = {
    yarrah: 330,
    eukanubaPuppyLarge: 374,
    mushPuppy: 199,
    nordicDogFoodBase: 185,
    mushAdultBlack: 244,
    mushAdultPurple: 218,
    mushAdultBlue: 204,
    mushAdultWild: 236,
    mushAdultGreen: 209,
    specificCod: 369,
} // dog food calories per 1g
const ageInMonths = {
    toFourMonths: 3.0,
    fourToAdult: 2.0,
    neuteredAdult: 1.6,
    intactAdult: 1.8,
    WeightLoss: 1.0,
    weightGain: [1.2, 1.8],
    activeWorkingDog: [2.0, 5.0]
}
/********************************/


/* CHANGEABLE FIELDS */
const animalBodyWeight = 22.5; // in kg
const mealsPerDay = 2
const brandOfChoice = ""
/********************************/


/* CALCS */
const RER = 70 * (Math.pow(animalBodyWeight, 0.75)) // RER - Resting Energy Requirements
const foodPerDay = RER * ageInMonths.fourToAdult
/********************************/


/* RESULTS */
console.log(`${Math.floor(foodPerDay)} calories each day`)
if(brandOfChoice) {
    const perDay = foodPerDay / (dogFoodBrands[brandOfChoice] / 100)
    console.log(`${perDay} grams of ${brandOfChoice} dog food per day (${perDay / mealsPerDay} grams per meal [${mealsPerDay}])`)
}
else {
    for (const brand in dogFoodBrands) {
        const perDay = foodPerDay / (dogFoodBrands[brand] / 100)
        console.log(`${perDay} grams of ${brand} dog food per day (${perDay / mealsPerDay} grams per meal [${mealsPerDay}])`)
    }
}
/********************************/
