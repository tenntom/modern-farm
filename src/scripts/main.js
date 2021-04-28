
import { createPotato } from "./seeds/potato.js"
import { createSoybean} from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus} from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower} from "./seeds/sunflower.js"

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
// console.log(wheatSeed)


import { createPlan } from "./plan.js";

const yearlyPlan = createPlan ("Corn");

console.log(yearlyPlan)



