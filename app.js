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
const videoSection = document.querySelector(".video-section");
const storeInfo = document.querySelector(".store-info");

// adds background to navbar when scrolling down
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.add("onScroll");
      storeInfo.classList.add("hide");
    } else {
      header.classList.remove("onScroll");
      storeInfo.classList.remove("hide");
    }
  });
});

observer.observe(videoSection);

btn.addEventListener("click", () => {
  animateCSS(".main__btn", "bounceIn").then((message) => {});
});
