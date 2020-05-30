window.onload = () => {
  let slider = document.getElementsByClassName('apartment_gallery_content')[0]
  let last_slide = slider.scrollWidth - slider.clientWidth
  let header_arrows = document.getElementsByClassName('apartment_gallery_switch')

  seconds = (sec) => {
    return sec * 1000
  }

  lockArrow = () => {
    Object.entries(header_arrows).forEach(function(element) {
      header_arrows[element[0]].style.pointerEvents='none'
    });
    setTimeout(() => {
      Object.entries(header_arrows).forEach(function(element) {
        header_arrows[element[0]].style.pointerEvents='auto'
      });
    }, seconds(0.5));
  }

  let autoSlide = setInterval(() => {
    if (slider.scrollLeft === last_slide) {
      slider.scrollLeft = 0
    }
    else {
      slider.scrollLeft += slider.clientWidth
    }
  }, seconds(4))

  nextSlide = () =>  {
    console.log(header_arrows)
    lockArrow()
    slider.scrollLeft += slider.clientWidth
    clearInterval(autoSlide)
  }
  previousSlide = () => {
    lockArrow()
    slider.scrollLeft -= slider.clientWidth
    clearInterval(autoSlide)
  }
}