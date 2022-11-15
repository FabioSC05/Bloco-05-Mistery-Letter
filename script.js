const button = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const paragraph = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');
const words = document.getElementById('palavras');

const deleteSpan = () => {
  paragraph.innerText = '';
  const spanSelector = document.querySelectorAll('span');
  for (let ind = 0; ind < spanSelector.length; ind += 1) {
    spanSelector[ind].remove();
  }
};

const style = () => {
  const random = Math.floor(Math.random() * 3);
  let className = 'magazine2';
  if (random === 0) {
    className = 'newspaper';
  }
  if (random === 1) {
    className = 'magazine1';
  }
  return className;
};

const size = () => {
  const random = Math.floor(Math.random() * 3);
  let className = 'reallybig';
  if (random === 0) {
    className = 'medium';
  }
  if (random === 1) {
    className = 'big';
  }
  return className;
};

const rotation = () => {
  const random = Math.floor(Math.random() * 2);
  let className = 'rotateright';
  if (random === 0) {
    className = 'rotateleft';
  }
  return className;
};

const inclination = () => {
  const random = Math.floor(Math.random() * 2);
  let className = 'skewright';
  if (random === 0) {
    className = 'skewleft';
  }
  return className;
};

const classChange = (event) => {
  event.target.removeAttribute('class');
  event.target.classList.add(style());
  event.target.classList.add(size());
  event.target.classList.add(rotation());
  event.target.classList.add(inclination());
};

const createSpan = () => {
  const string = input.value;
  const split = string.split(' ');
  if (split[0] === '') {
    counter.innerText = 0;
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < split.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = split[index];
      span.addEventListener('click', classChange);
      span.classList.add(style());
      span.classList.add(size());
      span.classList.add(rotation());
      span.classList.add(inclination());
      paragraph.appendChild(span);
      counter.innerText = split.length;
    }
  }
};

const palavrasChange = () => {
  if (counter.innerText === '1') {
    words.innerText = 'Palavra!';
  } else {
    words.innerText = 'Palavras!';
  }
};

const generate = () => {
  deleteSpan();
  createSpan();
  palavrasChange();
};

button.addEventListener('click', generate);
