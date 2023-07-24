// Write your code here!
const element=document.getElementById(main);
const firstChild= main.querySelector('main');
main.remove(main);

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Okumba is the champion";


