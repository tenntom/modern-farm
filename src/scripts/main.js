
import { createPotato } from "./seeds/potato.js"
import { createSoybean} from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus} from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower} from "./seeds/sunflower.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { createPlan } from "./plan.js"
// import { harvestPlants } from "./harvester.js"

const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const cornSeed = createCorn()
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()
const sunflowerSeed = createSunflower()

// console.log(potatoSeed)
// console.log(cornSeed)
// console.log(sunflowerSeed)
// console.log(soybeanSeed)
// console.log(asparagusSeed)
// // console.log(wheatSeed)



const yearlyPlan = createPlan (); // Making the plan

plantSeeds(yearlyPlan) //using the plan to put the seeds in the plants array

console.log(yearlyPlan) // checking the original yearly Plan function

const plants = usePlants() //updating the copy of the array

console.log(plants) //checking to see that the plans match.


