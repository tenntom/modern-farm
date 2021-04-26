import { getSeeds } from "./seeds.js"

const seeds = getSeeds()

export const createSoybean = () => {
    for (const seed of seeds) {
        if (seed.type === "Soybean") {
            return seed
        }
    }
}