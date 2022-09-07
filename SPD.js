let slidesContainer = document.getElementById("slidercontener")
const prevButton = document.getElementById("ovalbutton-left")
const nextButton = document.getElementById("ovalbutton-right")
const slide =document.querySelector(".img")

nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });