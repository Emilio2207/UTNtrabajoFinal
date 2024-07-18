const change = () => {
  const { innerHeight, scrollY } = window;
  const nav = document.querySelector(".change-nav");

  if (innerHeight * 0.5 < scrollY) {
    nav.classList.add("changeNav");
  } else {
    nav.classList.remove("changeNav");
  }
};

window.addEventListener("scroll", change);
