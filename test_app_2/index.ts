const hello: string = 'world';

interface IAnimal {
  makeNoise(): string,
}

type IAnimal2 = {
  makeNoise(): string,
};

const notADog: IAnimal2 = {
  makeNoise() {
    return 'bark';
  }
};

class Dog implements IAnimal {
    makeNoise(): string {
        throw new Error("Method not implemented.");
    }
}

const asdfas = 'ergsd' as unknown as number;

type Alias = Dog;
type NumberOrString = string | number;

const aDog: Alias = new Dog();

const aNumber: NumberOrString = 986743;
const bNumber: NumberOrString = 'gsefkjs';

type TypeLiteral =
  | 'A literal string'
  | 'another literal string';

type OptionalString = null | string;

const func = <T extends string[]>(input: T): T[0] => {
  return input[0];
}
// 'hello world' is a string;
// ('hello world' as const) is 'hello world';
const returnValue = func(['hello', 'world'] as const);


const classicFunc = () => {
  return new Dog();
};

type ClassicFunctionReturn = ReturnType<typeof classicFunc>;

const weirdFunction = (classicReturn: ClassicFunctionReturn) => {

};

weirdFunction('asdhfuas');

type Maybe<T extends number> = null | T;

const exampleFunction = (input: Maybe<10>, anotherInput: Maybe<22>) => {

}

exampleFunction(null, null);
exampleFunction('asgasdg', null);
exampleFunction(null, new Dog());

switch (typeof aNumber) {
  case 'string':
    console.log("string"); break;
  case 'number':
    console.log("number"); break;
  case 'boolean':
    aNumber;
    console.log("boolean"); break;
}

const do_math = (a: number, b: number) => {
  console.log(a + b);
}

do_math(asdfas, asdfas);