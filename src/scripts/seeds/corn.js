import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createCorn = () => {  //I think I overcomplicated this exercise. See Asparagus for a simplier version. 
    const seedArray = []
    for (const seed of seeds) {
        if (seed.type === "Corn") {
            seedArray.push(seed)
        }
    }
    return seedArray
}