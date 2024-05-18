let slider = document.querySelectorAll(".slider .slide");
let myimg = document.getElementById("myimg");

let sliderstop = document.getElementById("slidestop");

let SlideIndex = 0;
let SliderTime = null;

timeSlider();
function timeSlider() {
  if (slider.length > 0) {
    slider[0].classList.add("displaySlide");
    SliderTime = setInterval(nextSlider, 5000);
    SliderTime = setInterval(prevSlider, 5000);
  }
};

function showSlider(images) {
  if (images >= slider.length) {
    SlideIndex = 0;
  } else if (images < 0) {
    SlideIndex = slider.length - 1;
  };

  slider.forEach((slideEach) => {
    slideEach.classList.remove("displaySlide");
  });
  slider[SlideIndex].classList.add("displaySlide");
};
function prevSlider() {
  clearInterval(SliderTime);
  SlideIndex--;
  showSlider(SlideIndex);
};

function nextSlider() {
  SlideIndex++;
  showSlider(SlideIndex);
};

// navbar scroll down;

let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 20) {
    navbar.classList.remove("content_navbar");
    navbar.classList.add("scrollnavbar");
  } else {
    navbar.classList.remove("scrollnavbar");
    navbar.classList.add("content_navbar");
  };
});

// button => top

let btn = document.getElementById("topScroll");
window.addEventListener("scroll", function () {
  if (scrollY >= 100) {
    btn.style.display = "block";
  } else if (scrollY <= 10) {
    btn.style.display = "none";
  }
});

btn.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};



function calc(...number){
  let result = 0; 
  for(let i = 0; i<number.length; i++){
    result += number[i];
  }
  return result
}




