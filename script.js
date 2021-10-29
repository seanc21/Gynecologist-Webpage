const header = document.querySelector("header");
const sectionOne = document.querySelector("#showcase");
const parallax = document.querySelector("#mobile-parallax");

const sectionOneOptions = {
  rootMargin: "-700px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      parallax.classList.add("add-parallax");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
