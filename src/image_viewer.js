// import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';

export default () => {
  console.log('Export starts');
  const image = document.createElement('img');
  image.src = small;
  document.body.appendChild(image);
}

//
// const bigImage = document.createElement('img');
// bigImage.src = big;
// document.body.appendChild(bigImage);
