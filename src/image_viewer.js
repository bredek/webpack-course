import '../styles/image_viewer.css'

const image = document.createElement('img');
const imageSrc = 'http://lorempixel.com/400/400/';
image.src = imageSrc;

const imageTarget = document.querySelector('#image');
imageTarget.appendChild(image);
