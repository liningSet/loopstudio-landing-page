const burgerBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav-container");
let header = document.querySelector("header");
const screen = matchMedia("(min-width:800px)");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("is-active");

  if (burgerBtn.classList.contains("is-active")) {
    if (!screen.matches) {
      mobileMenu.style.width = "100%";
      document.body.style.overflowY = "hidden";
    }
  } else {
    mobileMenu.style.width = "0";
    document.body.style.overflowY = "auto";
  }
});

let tl = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "power1",
  },
});

tl.from(".hero-heading", {
  y: -150,
  opacity: 0,
  ease: "bounce",
})
  .to(".hero-heading", {
    width: "100%",
    duration: 4,
  })
  .to(
    ".hero-heading h1",
    {
      width: "100%",
      duration: 2,
    },
    1
  );

let options = {
  threshold: 0.25,
};
let observer = new IntersectionObserver(callback, options);

function callback(entries) {
  entries.forEach((entry) => {
    burgerBtn.addEventListener("click", () => {
      if (burgerBtn.classList.contains("is-active")) {
        if (entry.isIntersecting) {
          nav.id = "";
        } else {
          nav.id = "";
        }
      } else {
        if (entry.isIntersecting) {
          nav.id = "";
        } else {
          nav.id = "active-nav";
        }
      }
    });
    if (entry.isIntersecting) {
      nav.id = "";
    } else {
      nav.id = "active-nav";
    }
  });
}

observer.observe(header);
