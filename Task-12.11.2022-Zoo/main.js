//Animals
var wolf = {
    id: 1,
    animal: "wolf",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eat: "mammals",
    typeofAnimal: "predator"
};
var goldfish = {
    id: 2,
    animal: "goldfish",
    biome: "ocean",
    reservoir: true,
    requiredSpace: 10,
    eat: "fishFood",
    typeofAnimal: "herbivore"
};
var tiger = {
    id: 3,
    animal: "tiger",
    biome: "tropical",
    reservoir: false,
    requiredSpace: 1000,
    eat: "carnivore",
    typeofAnimal: "predator"
};
var wolf1 = {
    id: 1,
    name: 'wolf1',
    age: 2,
    foodAmount: 300,
    type: wolf
};
var wolf2 = {
    id: 2,
    name: 'wolf2',
    age: 4,
    foodAmount: 500,
    type: wolf
};
var wolf3 = {
    id: 3,
    name: 'wolf3',
    age: 3,
    foodAmount: 400,
    type: wolf
};
var goldfish1 = {
    id: 4,
    name: 'goldfish1',
    age: 0,
    foodAmount: 20,
    type: goldfish
};
var goldfish2 = {
    id: 5,
    name: 'goldfish2',
    age: 0,
    foodAmount: 20,
    type: goldfish
};
var tiger1 = {
    id: 6,
    name: 'tiger1',
    age: 2,
    foodAmount: 200,
    type: tiger
};
var cage1 = {
    id: 1,
    name: 'cage1',
    biome: "ocean",
    reservoir: true,
    area: 50,
    animals: []
};
var cage2 = {
    id: 2,
    name: 'cage2',
    biome: "tropical",
    reservoir: false,
    area: 1000,
    animals: []
};
var cage3 = {
    id: 3,
    name: 'cage3',
    biome: "Taiga",
    reservoir: true,
    area: 200,
    animals: []
};
function placeAnimals(animal, enclosure) {
    if (animal.type.reservoir === enclosure.reservoir && animal.type.biome === enclosure.biome && animal.type.requiredSpace <= enclosure.area) {
        console.log("This enclosure is suitable for ".concat(animal.name, "."));
        checkType(animal, enclosure.animals);
        return "".concat(animal.name, " added to ").concat(enclosure.name);
    }
    else {
        console.log("It is impossible to add \"".concat(animal.name, "\" to enclosure with ").concat(enclosure.area, "m area,").concat(enclosure.biome, " biome. "));
        return 'That is why adding failed.';
    }
}
function checkType(animal, animals) {
    if (animals.length == 0) {
        animals.push(animal);
    }
    else {
        for (var i = 0; i < animals.length; i++) {
            console.log("sdhsufdfgdhdjghdgam");
            if ((animals[i].type.typeofAnimal == 'predator' && animal.type.typeofAnimal == 'herbivore') || (animals[i].type.typeofAnimal == 'herbivore' && animal.type.typeofAnimal == 'predator')) {
                console.log("This enclosure is not suitable for ".concat(animal.name, ",because types of animals are opposite. "));
                console.log('====================================');
            }
            else {
                animals.push(animal);
                break;
            }
        }
    }
    //    return animal && animals
}
console.log(placeAnimals(wolf1, cage3));
console.log(placeAnimals(wolf2, cage3));
console.log(placeAnimals(wolf3, cage3));
console.log(placeAnimals(goldfish1, cage1));
console.log(placeAnimals(goldfish2, cage2));
console.log(placeAnimals(tiger1, cage2));
console.log('====================================');
function showAnimals(enclosure) {
    console.log("Animals in ".concat(enclosure.name, ":"));
    console.log("slaam");
    console.log(enclosure.animals);
    enclosure.animals.forEach(function (anm) {
        console.log(anm.name);
        if (enclosure.animals.length === 0) {
            console.log("This enclosure is empty..");
        }
        return anm.name;
    });
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(cage3);
console.log(cage2.animals);
