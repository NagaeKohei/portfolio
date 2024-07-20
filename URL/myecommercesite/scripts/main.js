document.addEventListener('DOMContentLoaded', function() {
  const scrollable = document.querySelector('.new-choco');
  let isScrolling = false;
  let velocity = 0;
  const friction = 0.8;

  scrollable.addEventListener('wheel', (event) => {
      event.preventDefault();
      velocity += event.deltaY;
      if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(decelerateScroll);
      }
  });

  function decelerateScroll() {
      scrollable.scrollLeft += velocity;
      velocity *= friction;

      if (Math.abs(velocity) > 0.5) {
          requestAnimationFrame(decelerateScroll);
      } else {
          isScrolling = false;
      }
  }
});
