// Prototype in js

// let animal = {
//     eat: true,
//     walk() {
//         console.log('yup they can walk')
//     }
// }

// let rabbit = {
//     jump: true,
//     __proto__: animal   //this is also r8 syntax
// }

// rabbit.__proto__ = animal;

// console.log(rabbit.jump)
// console.log(rabbit.eat)
// console.log(rabbit.walk())

// prototype can be chained

// let longEar = {
//     londEar: true,
//     __proto__ : rabbit 
// }

// console.log(longEar.walk())  // taken from animal
// console.log(longEar.jump)  //taken from rabbit

// let user = {
//     name : 'amit',
//     surname : 'shrama',

//     get fullname() {
//         return `${this.name} ${this.surname}`
//     },

//     set fullname(value) {
//         return [this.name, this.surname] = value.split(' ');
//     }
// }


// let admin = {
//     __proto__: user,
//     isAdmin: true
// }

// console.log(admin.fullname);

// admin.fullname = 'Rohit sharma';

// console.log(admin.fullname)
// console.log(user.fullname)


// let animal = {
    // walk() {
    //     if(!this.isSleeping) {
    //         console.log('I walk')
    //     }
    // },

//     sleep() {
//         this.isSleeping = true
//     }
// };

// let rabbit = {
//     name: 'carrot',
//     __proto__: animal
// }

// rabbit.sleep();

// console.log(rabbit.isSleeping);

// animal.sleep()
// console.log(animal.isSleeping)

let animal = {
    eat:true,
}

let rabbit = {
    isFourLeg : true,
    __proto__: animal
}

console.log(Object.keys(rabbit))

for(let key in rabbit) console.log(key)