// Prototype in js

let animal = {
    eat: true,
    walk() {
        console.log('yup they can walk')
    }
}

let rabbit = {
    jump: true,
    __proto__: animal   //this is also r8 syntax
}

// rabbit.__proto__ = animal;

console.log(rabbit.jump)
console.log(rabbit.eat)
console.log(rabbit.walk())

// prototype can be chained

let longEar = {
    londEar: true,
    __proto__ : rabbit 
}

console.log(longEar.walk())  // taken from animal
console.log(longEar.jump)  //taken from rabbit