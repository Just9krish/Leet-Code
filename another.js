function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log("Insufficient funds");
  }
}

function toString() {
  return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
console.log(account.toString()); // Balance: 750

// let stud = { name: "dfjd" };

// stud[name] = "dfdf";
// let arr = stud;

// stud = null;

// console.log(arr[0]);
// console.log(stud);

// let john = { name: "John" };
// let john = "Df";

let weakMap = new WeakMap();
let map = new Map();

weakMap.set(john, "...");
map.set(john, "...");

john = null;

console.log(weakMap.get(john));
console.log(map.get(john));

function showNAme() {
  console.log(arguments.length);
}

showNAme("nmae", "dfdga");

let str = "[1,353,5,6,43]";

console.log([...str]);
console.log(Array.from(str));

let arr = [1, 2, 3];

let arrCopy = [...arr];

console.log(arr === arrCopy);

console.log(arr);
console.log(arrCopy);

function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name);

let name = function () {
  console.log("Hi");
};

console.log(name.name);

let oppai = () => {
  console.log("hi");
};

console.log(oppai.name);

let one = {
  sayHi: function () {
    console.log("Hi");
  },
};

console.log(one.sayHi.name);

let two = [
  function () {
    console.log("bye");
  },
];

console.log(two[0].name);

let sayHi = function (who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi("Guest");
    // func("Guest");
  }
};

let welcome = sayHi;

console.log(welcome);
sayHi = null;

sayHi();

welcome();

var a = 14;

console.log(globalThis.a);
