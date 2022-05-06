const defaultbutton = () => {
  document.querySelector('body').className = ' ';
};

const oceanbutton = () => {
  document.querySelector('body').className = 'ocean';
};

const desertbutton = () => {
  document.querySelector('body').className = 'desert';
};
const highcontrastbutton = () => {
  document.querySelector('body').className = 'high-contrast';
};

document.querySelector('#default').addEventListener('click', defaultbutton);
document.querySelector('#ocean').addEventListener('click', oceanbutton);
document.querySelector('#desert').addEventListener('click', desertbutton);
document
  .querySelector('#high-contrast')
  .addEventListener('click', highcontrastbutton);
