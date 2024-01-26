<script>
  let currentIndex = 0;

  function showSlide(index) {
    const slider = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }
</script>
