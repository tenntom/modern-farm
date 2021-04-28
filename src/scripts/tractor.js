import { createPlan } from "./plan.js"
import { usePlants, addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { getSeeds } from "./seeds/seeds.js"



const plantVariable = usePlants() //setting variable to copy of array.

const myPlan = createPlan() //creating the plan for the season
const seeds = getSeeds() // getting all the seeds

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const seedType of row) {
            for (const seed of seeds) {
            if (seedType === seed.type) {        //My own weird approach here
                addPlant(seed)
                }
            }
        }
    }
}
