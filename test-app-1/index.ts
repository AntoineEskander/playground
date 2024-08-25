interface IAnimal {
  makeNoise(): string;
}

class Dog implements IAnimal {
  makeNoise(): string {
    return "Woof!";
  }
}

console.log("Hello World!");

const oDog: Dog = new Dog();
console.log(oDog.makeNoise());

const iDog: IAnimal = new Dog();
console.log(iDog.makeNoise());

let vDog: IAnimal = new Dog();
console.log(vDog.makeNoise());
