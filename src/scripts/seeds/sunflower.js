import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createSunflower = () => {  //I think I overcomplicated this exercise. See Asparagus for a simplier version.
    for (const seed of seeds) {
        if (seed.type === "Sunflower") {
            return seed
        }
    }
}

createSunflower()