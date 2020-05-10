window.onload = () => {
  let slider = document.getElementsByClassName('apartment_gallery_content')[0]
  let last_slide = slider.scrollWidth - slider.clientWidth

  let autoSlide = setInterval(() => {
    if (slider.scrollLeft === last_slide) {
      slider.scrollLeft = 0
    }
    else {
      slider.scrollLeft += slider.clientWidth
    }
  }, 4000)

  nextSlide = () =>  {
    slider.scrollLeft += slider.clientWidth
    clearInterval(autoSlide)
  }
  previousSlide = () => {
    slider.scrollLeft -= slider.clientWidth
    clearInterval(autoSlide)
  }
}