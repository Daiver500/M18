const sliderButtonLeft = document.querySelector(".slider__button--left");
const sliderButtonRight = document.querySelector(".slider__button--right");
const sliderImage = document.querySelectorAll(".slider__picture")

const imageMoveRight = () => {
  sliderImage.forEach((item) => {
    item.style.transform = "translateX(-50%)"
  })
}

const imageMoveLeft = () => {
  sliderImage.forEach((item) => {
    item.style.transform = "translateX(50%)"
  })
}

sliderButtonRight.addEventListener("click", imageMoveRight);
sliderButtonLeft.addEventListener("click", imageMoveLeft);

