import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createPotato = () => {
    for (const seed of seeds) {
        if (seed.type === "Potato") {
            return seed
        }
    }
}