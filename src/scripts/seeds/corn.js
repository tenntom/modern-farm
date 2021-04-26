import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createCorn = () => {
    for (const seed of seeds) {
        if (seed.type === "Corn") {
            return seed
        }
    }
}