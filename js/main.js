const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors = ['blue', 'red', 'yellow', 'green'];

colorBtn.addEventListener('click', changeColors);

function changeColors() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBg.style.backgroundColor = colors[random];
}

