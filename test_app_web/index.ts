
const heading = document.createElement('h1');
const button = document.createElement('button');

heading.innerText = "Hello world!";
button.innerText = "Click me!";

button.addEventListener('click', () => {
  const output = document.createElement('div');
  output.innerText = "Clicked!"
  document.body.appendChild(output);
});

document.body.appendChild(heading);
document.body.appendChild(button);
