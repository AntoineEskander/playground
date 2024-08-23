export const constant_var = "asdgadfg";

export function aFunc(args, arg2) {

}

aFunc();

const anotherFunc = (args, arg2) => {

}

anotherFunc();

for (let i = 0; i < 100; i++) {

}

const objectFactory = () => {
  let count = 0;

  const object = {
    aFunction() {
      count++;
      console.log(`Called ${count} times`)
    }
  };

  return object;
};

const object1 = {
  count: 0,
  aFunction() {
    count++;
    console.log(`Called ${count} times`)
  }
};


//console.log(object1.count); 
//console.log(object1.aFunction()); 
/*
const objectInstance = objectFactory();

console.log(objectInstance.count);
console.log(objectInstance.aFunction());
console.log(objectInstance.aFunction());
console.log(objectInstance.aFunction());
console.log(objectInstance.aFunction());
*/

class AClass {
  aProp = "a value";

  constructor() {
    console.log('CREATED')
  }

  a_function_inside_the_class() {
    console.log('The method was run')
  }
}

const createTimeService = (initialTime) => {
   let minutes = initialTime / 60;
   let hours = initialTime / 60 / 60;

  const printCurrentTime = () => {
    console.log(`Minutes: ${minutes}, Hours: ${hours}`);
  };

  return { printCurrentTime };
};

const superCurriedFunction = (first) => {
  return (second) => {
    return (third) => {
      console.log(first, second, third);
    }
  }
}
superCurriedFunction('a')('b')('c');

const cfunc = superCurriedFunction('a')
const cfunc2 = cfunc('b')
const cfunc3 = cfunc2('c')
cfunc3();

let func = createTimeService(120);
func();

// IN THE V1
// v1/main.js
const overloadableFunction_ = (arg) => {
  console.log(arg)
};

// v2/main.js
const overloadableFunction_OLD = (arg) => {
  console.log(arg)
};

const overloadableFunction = (arg, whattodo) => {
  if (whattodo) {
    console.log('PERFORM ADVANCED FUNCTIONALITY')
  } else {
    overloadableFunction_OLD(arg);
  }
};

// Code that uses v1
overloadableFunction(2109);
overloadableFunction('dasdgdsa');
// Code that uses v2
overloadableFunction(45326, 'sdfg');

class Person {
  firstName = ''
  lastName = ''

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const createPerson = (firstName, lastName) => {
  return { firstName, lastName };
};
/*
type Person = {
  firstName: string,
  lastName: string,
}
  */

new Person('luke', 'kaalim')
createPerson('luke', 'kaalim')