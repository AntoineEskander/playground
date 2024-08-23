console.log("Hello!");
/*
const anotherFunction = (arg) => {
  arg.hello = "again";
};
*/

//const object = { hello: 'world' }

//anotherFunction(object);

//console.log(object.hello);


//import { readFile } from 'node:fs';

// common JS way to import libs
//const { readFile } = require('node:fs/promises');  

import { readFile, writeFile, mkdir } from 'node:fs/promises';

//import { aFunc as aNotherFunc } from './primitives.js';
//import { bFunc as aThirdFunc } from './primitives.js';

const a = {};
const b = {};

const factory = () => {
  const inner_func = () => {

  };
  return inner_func;
};

const c = factory();
const d = factory();

c !== d;

if (aNotherFunc == aThirdFunc) {
  
}

//const outputfile = await readFile('./test_app/package.json','utf8');
const outputfile =  readFile('./test_app/package.json','utf8');
console.log(outputfile);

something.constant_var;




import { createInterface } from 'node:readline/promises'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();

console.log(await outputfile);
outputfile.then(result => {
  console.log(result);
});



//https://tv-api.9now.com.au/v2/pages/home?device=cool-device

const targetRequest = 'https://tv-api.9now.com.au/v2/pages/home?device=web';
const fetchpromise = await fetch(targetRequest);
const fetchbody = await fetchpromise.json(); //fetchpromise.text();
console.log(fetchbody.meta.title);