import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createWheat = () => {
    for (const seed of seeds) {
        if (seed.type === "Wheat") {
            return seed
        }
    }
}