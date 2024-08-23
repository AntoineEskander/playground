import { createRoot } from 'react-dom/client';
import { createElement, useState } from 'react';

const button = document.createElement('button');
button.innerText = "This is a text button";
const frame = document.createElement('div');
frame.innerText = "This is an empty frame";

type Options = {
  showButton: boolean,
}

const renderUI = (options: Options) => {
  if (options.showButton) {
    document.body.append(button);
    document.body.append(frame);
  } else {
    document.body.append(frame);
  }
};

renderUI({ showButton: true });

const exampleFunction = () => {
  return [74, 84];
};

const readingFunction = () => {
  const result = exampleFunction();
  const seventyFour = result[0];


  const [severyFourAgain, eightyFour] = exampleFunction();
}

const MyApp = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  const onClick = () => {
    setShowWelcome(!showWelcome);
  }

  return [
    showWelcome && createElement('h1', {}, ['hello ', 'world']),
    createElement('button', { onClick }, 'Toogle Welcome')
  ];
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(createElement(MyApp));
}
