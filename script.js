// Stop the animation when the user hovers over the gallery
var gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseenter', function() {
  var slider = document.querySelector('.slider');
  slider.style.animationPlayState = 'paused';
});

gallery.addEventListener('mouseleave', function() {
  var slider = document.querySelector('.slider');
  slider.style.animationPlayState = 'running';
});
