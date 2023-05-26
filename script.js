window.addEventListener('scroll', function() {
  var parallax = document.querySelector('.parallax');
  var scrolled = window.pageYOffset;
  parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
});