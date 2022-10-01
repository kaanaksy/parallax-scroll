let floor = document.getElementById('floor');
let boat = document.getElementById('boat');
let flyingbirds = document.getElementById('flyingbirds');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let value = this.window.scrollY;
  floor.style.top = value * 0.09 + 'px';
  boat.style.left = value * 0.25 + 'px';
  flyingbirds.style.left = value * 0.75 + 'px';
  header.style.top = value * 0.5 + 'px';
})