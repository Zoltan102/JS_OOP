class Animal {
    #legCount;
    #name;

    constructor(name, legCount){
        this.#name = name;
        this.#legCount = legCount;
    }

    makeSound() {
        throw new Error('The makeSound is abstract.')
    }
}

class Fish extends Animal {
    constructor(name){
        super(name, 0);
    }
    makeSound() {
        console.log('')
    }
}

class Dog extends Animal{
    constructor(name){
        super(name, 4);
    }

    makeSound() {
        console.log('Woof');
    }
}

let dog = new Dog('Bodri');
let fish = new Fish('Nemo');
dog.makeSound();
fish.makeSound();