// Object litral

let dog = {
    spound : 'woof',
    talk: function() {
        console.log(this.spound)
    }
}

dog.talk()   // "woof"

let talkFunction = dog.talk    // function() { console.log(this.sound) }  there is no this that's why it show undefined

talkFunction();    // udefined

// use bind
let boundFunction = talkFunction.bind(dog)   // bind forces this to be dog here

boundFunction() // "woof"


// real wold example

// let button = document.getElementById('myNiceButton')

// button.addEventListener('click', dog.talk.bind(dog))



function talk() {
    console.log(this.sound)
}

let baromir = {
    sound: 'one does not simply walk into modor'
}

let talkBoundToBormir = talk.bind(baromir)
talkBoundToBormir()
talk()   // bind does not mess with talk function
// 75049682911