const fieldPlants = []

const addPlant = (seed) => {
    fieldPlants.push(seed)
}

const usePlants = () => {   //This needs an export but does not work to console log after including export.
    return [...fieldPlants]
}

// const seedObject = {         These work when usePlants not exported.
//     type: "Asparagus",
//     height: 24,
//     output: 4
// }

// addPlant(seedObject)

// const plantVariable = usePlants()

// console.log(plantVariable)