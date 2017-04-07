import sum from './sum.js';
import './image_viewer';

var total = sum(10, 20);
document.querySelector('#root').innerHTML = total;
