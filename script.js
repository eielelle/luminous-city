document.addEventListener("DOMContentLoaded", doAnim);
document.addEventListener("scroll", doAnim);

function doAnim() {
  const elements = Array.from(document.querySelectorAll(".a"));
  let currentElements = [];

  currentElements = elements.filter((el) => {
    const elTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    return elTop < windowHeight * 0.9 && !el.classList.contains("anim");
  });

  currentElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("anim");
    }, index * 0.2 * 1000);
  });
}

const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  const bottomHeader = document.querySelector("header .bottom");

  if (bottomHeader.classList.contains("toggle-up")) {
    bottomHeader.classList.remove("toggle-up");
  } else {
    bottomHeader.classList.add("toggle-up");
  }
});
