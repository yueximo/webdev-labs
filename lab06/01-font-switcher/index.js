hsize = 3.0;
psize = 2.0;

const makeBigger = () => {
  hsize = hsize + 0.2;
  psize += 0.1;
  document.querySelector('h1').style.fontSize = hsize.toString() + 'em';
  document.querySelector('p').style.fontSize = psize.toString() + 'em';
};

const makeSmaller = () => {
  hsize = hsize - 0.2;
  psize -= 0.1;
  document.querySelector('h1').style.fontSize = hsize.toString() + 'em';
  document.querySelector('p').style.fontSize = psize.toString() + 'em';
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
