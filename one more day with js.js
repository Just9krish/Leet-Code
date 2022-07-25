// 'use strict'
// let user = {
//     name: "dfse"
// }

// Object.defineProperty(user, 'name', {
//     writable: false
// })

// Object.defineProperty(user, 'age', {
//     value : 23
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// let descriptors = Object.getOwnPropertyDescriptor(user, 'age');

// console.log(JSON.stringify(descriptor, null, 2))
// console.log(JSON.stringify(descriptors, null, 2))

// user.name = 'lgeg';

// console.log(user.name)

// making toString enumerable false;
// let user = {
//     name : 'dfd',
//     toString() {
//         return this.name;
//     }
// }

// for (let key in user) console.log(key);

// Object.defineProperty(user, 'toString', {
//     enumerable: false
// })

// for (let key in user) console.log(key);


// Math.PI is non enumerable, non writable and non configurable item

// let mathPi = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(JSON.stringify(mathPi, null, 2))


// let users = {
//     name: 'dfdd'
// }

// Object.defineProperty(users, 'name', { 
//     // now making the name change forever seal
//     writable: false,

//     configurable: false
// })
// users.name = 'dgeg'

// console.log(users.name)

// delete users.name

// Object.defineProperty(users, 'name', {
//     value: 'dfage'
// })


// Getter and setter

// let user = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     alsoFullName() {
//         return `${this.name} ${this.surname}`
//     },


//     //   now assiging value with setter

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
// }

// user.fullName = 'rohit sharma';

// console.log(user.fullName)
// console.log(user.alsoFullName())


// using defined property for getter and setter

// let user = {
//     name : 'amfdf',
//     surName: 'sdfsf'
// }

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surName}`
//     },

//     set(value) {
//         return [this.name, this.surName] = value.split(" ")
//     }
// })

// user.fullName = "rohit sharma"
// console.log(user.fullName)

// for(let key in user) console.log(key)

// asssigining property with getter and setter

// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         value.length < 4 ? console.log('Name is less than 4 char') : this._name = value;
//     }
// }

// user.name = "d";

// console.log(user.name)



function User(name, birthday) {
    this.name = name,
    this.birthday = birthday

    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let amit = new User('Amit', new Date(1999, 8, 26))

console.log(amit.birthday)
console.log(amit.age)