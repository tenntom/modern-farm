// import { createCorn } from "./seeds/corn.js"
// import { getSeeds } from "./seeds/seeds.js"
// import { createSunflower } from "./seeds/sunflower.mjs"

const fieldPlants = []
// const corn = createCorn()
// const seeds = getSeeds()
// const sunflower = createSunflower()

export const addPlant = (seed) => { //adds to the empty array
    fieldPlants.push(seed)
}

export const usePlants = () => {   //Copies array
    return [...fieldPlants]
}

