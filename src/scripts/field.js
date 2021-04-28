import { createCorn } from "./seeds/corn.js"
// import { getSeeds } from "./seeds/seeds.js"
// import { createSunflower } from "./seeds/sunflower.mjs"

const fieldPlants = []
const corn = createCorn()
// const seeds = getSeeds()
// const sunflower = createSunflower()

const addPlant = (seed) => {
    fieldPlants.push(seed)
}

export const usePlants = () => {   //This needs an export but does not work to console log after including export.
    return [...fieldPlants]
}

const seedObject = {         // These work when usePlants not exported.
    type: "Asparagus",
    height: 24,
    output: 4
}

// const seedObject = createCorn()

addPlant(seedObject)

const plantVariable = usePlants()

console.log(plantVariable)