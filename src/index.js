import '../styles/image_viewer.css';
const button = document.createElement('button');
button.innerHTML = 'Click me';

function onClickFunc() {
  console.log('Click!');
  import("./image_viewer").then(module => {
    return module.default();
  }).catch(err => {
    console.log("Chunk loading failed");
  });
}


button.addEventListener('click', onClickFunc);

document.body.appendChild(button);
