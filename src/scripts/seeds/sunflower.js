import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createSunflower = () => {
    for (const seed of seeds) {
        if (seed.type === "Sunflower") {
            return seed
        }
    }
}