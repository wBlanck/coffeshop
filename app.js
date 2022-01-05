// animatecss function
const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

const btn = document.querySelector(".main__btn");
const header = document.querySelector(".header");
const heroSubTitle = document.querySelector(".main__subtitle");
const storeInfo = document.querySelector(".store-info");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeMobileNav = document.querySelector(".close-btn");
const scrollToTopBtn = document.querySelector(".scroll-to-top");

// adds background to navbar when scrolling down
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("onScroll");
      storeInfo.classList.remove("hide");
      scrollToTopBtn.classList.remove("show");
    } else {
      header.classList.add("onScroll");
      storeInfo.classList.add("hide");
      scrollToTopBtn.classList.add("show");
    }
  });
});

observer.observe(heroSubTitle);

btn.addEventListener("click", () => {
  animateCSS(".main__btn", "bounceIn").then((message) => {});
});

hamburger.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0)";
});
closeMobileNav.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(-100%)";
});
