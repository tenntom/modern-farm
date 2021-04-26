// import { getSeeds } from "./seeds.js"

// const seeds = getSeeds()

// export const createAsparagus = () => {
//     for (const seed of seeds) {
//         if (seed.type === "Asparagus") {
//             return seed
//         }
//     }
// }

export const createAsparagus = () => {
    return {
        type: "Asparagus",
        height: 24,
        output: 4
    }
}