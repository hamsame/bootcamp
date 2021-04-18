let a = 0;
const images = [];

images[0] = 'images/developers.jpeg';
images[1] = 'images/coder.jpeg';
images[2] = 'images/coder2.jpeg';
images[3] = 'images/coder3.jpeg';

// change img
function changeImages() {
  document.slider.src = images[a];

  a < images.length - 1 ? a++ : (a = 0);

  setTimeout('changeImages()', 3000);
}
window.onload = changeImages();

// Materialize css
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, { hover: true });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
