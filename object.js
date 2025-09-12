// obj literal
let obj1 = {
  name: "John",
  age: 30,
  "has Job": true,
  hobbies: ["gaming", "Reading"],
};

console.log(obj1);

// obj access
//dot notation
console.log(obj1.age);

// []
console.log(obj1["has Job"]);

obj1.married = true;
obj1["has Job"] = false;

console.log(obj1.age);

for (let key in obj1) {
  console.log(obj1[key]);
}

let keys = Object.keys(obj1);

console.log(keys);

let value = Object.values(obj1);

console.log(value);

let all = Object.entries(obj1);

console.log(all);

// Object.freeze(obj1);
Object.seal(obj1);
obj1.name = "Alice";
obj1.name2 = "Bob";
console.log(obj1);

const { name, age } = obj1;

// let name = obj1.name
console.log(name, age);

//

function Outsidegreet() {
  console.log(this.name);
}

const arrowFuncGreet = () => console.log(this);

const user = {
  name: "bob",
  age: 30,
  greet: function () {
    console.log(this.name);
    // Outsidegreet();
    // arrowFuncGreet();

    function grret2() {
      console.log(this);
    }
    grret2();

    const greet3 = () => {
      console.log(this);
    };

    greet3();
  },
  //   greet2: Outsidegreet,
};

user.greet();

// const add = (a,b) => a + b

// user.greet2();

function abc(name, age) {
  this.name = name;
  this.age = age;
}

let userObj = new abc("alice", 20);
let userObj2 = new abc("bob", 20);

console.log(userObj);
console.log(userObj2);
