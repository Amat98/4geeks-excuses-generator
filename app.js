const h2 = document.querySelector('h2')
const button = document.querySelector('button')

h2.textContent= "No excuse yet";

let list = [
  ['The dog', 'My grandma', 'His turtle', 'My bird'],
  ['ate', 'peed', 'crushed', 'broke'],
  ['my homework', 'the keys', 'the car'],
  ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying']
];


button.addEventListener('click', function() {
  let excuse = generateExcuse();
  h2.innerHTML = excuse;
});

function generateExcuse() {
  let excuse = '';

  for (let i = 0; i < list.length; i++) {
    let randomIndex = Math.floor(Math.random() * list[i].length);
    let str = list[i][randomIndex];

    if (i === 0) {
      excuse += str;
    } else {
      excuse += ' ' + str;
    }
  }

  return excuse;
}