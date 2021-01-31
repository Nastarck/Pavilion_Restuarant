

        // Heading SlideShow
 var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//slides number 2

var flowIndex = 0;
showFlow();

function showFlow() {
  var i;
  var slides = document.getElementsByClassName("myFlow");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  flowIndex++;
  if (flowIndex > slides.length) {flowIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[flowIndex-1].style.display = "block";  
  dots[flowIndex-1].className += " active";
  setTimeout(showFlow, 2000); // Change image every 2 seconds
}

// narbar responsiveness

  var toggleBtn = document.getElementsByClassName('icon')[0];
  var navbarLinks = document.getElementsByClassName('link')[0];

  toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('Active')
  });









