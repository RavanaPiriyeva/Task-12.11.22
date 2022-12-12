

interface IAnimalTypes {
    id: number;
    animal: string;
    biome: string;
    reservoir: boolean;
    requiredSpace: number;
    eat: string;
    typeofAnimal:Type;
}



interface IAnimal extends IAnimalTypes {
    id: number;
    name: string;
    age: number;
    foodAmount: number;
}

interface ICages {
    id: number;
    name: string;
    biome: string;
    reservoir: boolean;
    area: number;
    animals:IAnimal[]
}

type Type= 'predator' | 'herbivore';
//Animals

let wolf1:IAnimal = {
    id: 1,
    name: 'wolf1',
    age: 2,
    foodAmount: 300,
    animal: "wolf",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eat: "mammals",
    typeofAnimal:"predator",
}

let wolf2: IAnimal = {
    id: 2,
    name: 'wolf2',
    age: 4,
    foodAmount: 500,
    animal: "wolf",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eat: "mammals",
    typeofAnimal:"predator",
}

let wolf3: IAnimal = {
    id: 3,
    name: 'wolf3',
    age: 3,
    foodAmount: 400,
    animal: "wolf",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eat: "mammals",
    typeofAnimal:"predator",
}

let goldfish1: IAnimal = {
    id: 4,
    name: 'goldfish1',
    age: 0,
    foodAmount: 20,
    animal: "goldfish",
    biome: "ocean",
    reservoir: true,
    requiredSpace: 10,
    eat: "fishFood",
    typeofAnimal:"herbivore",
}

let goldfish2: IAnimal = {
    id: 5,
    name: 'goldfish2',
    age: 0,
    foodAmount: 20,
    animal: "goldfish",
    biome: "ocean",
    reservoir: true,
    requiredSpace: 10,
    eat: "fishFood",
    typeofAnimal:"herbivore",
}

let tiger1: IAnimal = {
    id: 6,
    name: 'tiger1',
    age: 2,
    foodAmount: 200,
    animal: "tiger",
    biome: "tropical",
    reservoir: false,
    requiredSpace: 1000,
    eat: "carnivore",
    typeofAnimal:"predator",
}

let cage1: ICages = {
    id: 1,
    name: 'cage1',
    biome: "ocean",
    reservoir: true,
    area: 50,
    animals: [],
}

let cage2: ICages = {
    id: 2,
    name: 'cage2',
    biome: "tropical",
    reservoir: false,
    area: 1000,
    animals: [],
}

let cage3: ICages = {
    id: 3,
    name: 'cage3',
    biome: "Taiga",
    reservoir: true,
    area: 200,
    animals: [],
}
function placeAnimals(animal:IAnimal,enclosure:ICages) {
    if (animal.reservoir===enclosure.reservoir && animal.biome===enclosure.biome && animal.requiredSpace<=enclosure.area) {
                 
    console.log(`This enclosure is suitable for ${animal.name}.`); 
    checkType(animal,enclosure.animals);
   
    return  `${animal.name} added to ${enclosure.name}`;
        
    }
    else{
        console.log(`It is impossible to add "${animal.name}" to enclosure with ${enclosure.area}m area,${enclosure.biome} biome. `);
        return 'That is why adding failed.'
    }

}
function checkType(animal:IAnimal,animals:IAnimal[]) {
for (let i = 0; i < animals.length; i++) {
if ((animals[i].typeofAnimal=='predator' && animal.typeofAnimal=='herbivore') || (animals[i].typeofAnimal=='herbivore' && animal.typeofAnimal=='predator')) {
    console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `);
    console.log('====================================');
}
else{
    animals.push(animal);
    
}

}
//    return animal && animals
}

console.log(placeAnimals(wolf1,cage3));
console.log(placeAnimals(wolf2,cage3));
console.log(placeAnimals(wolf3,cage3));
console.log(placeAnimals(goldfish1,cage1));
console.log(placeAnimals(goldfish2,cage2));
console.log(placeAnimals(tiger1,cage2));

console.log('====================================');

function showAnimals(enclosure:ICages) {
console.log(`Animals in ${enclosure.name}:`);
enclosure.animals.forEach(anm => {
console.log(anm.name)
if (enclosure.animals.length===0) {
    console.log("This enclosure is empty..");
    
}
return anm.name
})
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(cage3);


console.log(cage2.animals);