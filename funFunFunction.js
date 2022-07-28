// Object litral

// let dog = {
//     spound : 'woof',
//     talk: function() {
//         console.log(this.spound)
//     }
// }

// dog.talk()   // "woof"

// let talkFunction = dog.talk    // function() { console.log(this.sound) }  there is no this that's why it show undefined

// talkFunction();    // udefined

// use bind
// let boundFunction = talkFunction.bind(dog)   // bind forces this to be dog here

// boundFunction() // "woof"


// real wold example

// let button = document.getElementById('myNiceButton')

// button.addEventListener('click', dog.talk.bind(dog))



// function talk() {
//     console.log(this.sound)
// }

// let baromir = {
//     sound: 'one does not simply walk into modor',
//     speak: talk    // uper talk function
// }

// let talkBoundToBormir = talk.bind(baromir)
// talkBoundToBormir()
// talk()   // bind does not mess with talk function
// baromir.speak()

// let's use bind

// baromir.speak = talk.bind(baromir)
// let blabber = baromir.speak
// blabber()          // undefined if not use bind

// talk()    // undefined does't effect


// now making more confusing more code 

// let gollum = {
//     jabber : baromir.speak,
//     sound: 'my precisous....'
// }

// gollum.jabber()

// Prototype explanation

// function talk(sound) {
//     console.log(this.sound)
// }

// let animal = {
//     talk
// }

// let cat = {
//     sound: 'meow!',
// }

// let dog = {
//     sound: 'woof'
// }

// let prarieDog = {
//     howl : function() {
//         console.log(this.sound.toUpperCase());
//     }
// }

// Object.setPrototypeOf(cat, animal)
// cat.talk()

// Object.setPrototypeOf(dog, animal);

// animal.talk = function() {
//     console.log(`im little teapot ${this.sound}`)
// }
// dog.talk()
// cat.talk()

// Object.setPrototypeOf(prarieDog, dog)
// prarieDog.howl()


// new keyword

function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log('I say:', this.saying);
}

// var crockford = new Person('SEMICOLONS!!!1one1')

var crockford = ourNewKeyword(Person,'SEMICOLONS!!!1one1')

crockford.talk()
// console.log(crockford)


// making our new keyword

function ourNewKeyword(constructor) {
    var obj = {}   // create empty object
    Object.setPrototypeOf(obj, constructor.prototype)   // set the prototype

    // var argsArray = Array.from(arguments)   // mordern way to convert into arr
    var argsArray = Array.prototype.slice.apply(arguments)    // retro way to convert into arr
    constructor.apply(obj, argsArray.slice(1)) // execute the constructor with this keyword

    return obj    // return obj
}
