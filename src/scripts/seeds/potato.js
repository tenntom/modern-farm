// import { getSeeds } from "./seeds.js"

// const seeds = getSeeds()

// export const createPotato = () => {     //I think I overcomplicated this exercise. See Asparagus for a simplier version.
//     for (const seed of seeds) {
//         if (seed.type === "Potato") {
//             return seed
//         }
//     }
// }

export const createPotato = () => {
    return {
        type: "Potato",
        height: 32,
        output: 2
    }
}