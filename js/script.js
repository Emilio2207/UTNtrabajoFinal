/* scroll */
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

/* logo */
document.addEventListener("DOMContentLoaded", function () {
  const imgElement = document.getElementById("logoCompu");
  const svgUrl = imgElement.getAttribute("src");

  fetch(svgUrl)
    .then((response) => response.text())
    .then((svgContent) => {
      const svgContainer = document.createElement("div");
      svgContainer.innerHTML = svgContent;
      const svgElement = svgContainer.querySelector("svg");

      imgElement.replaceWith(svgElement);

      animateSVG(svgElement);
    })
    .catch((error) => console.error("Error cargando el SVG:", error));
});

function animateSVG(svg) {
  const elementsNoteA = svg.querySelectorAll(".noteA");
  const elementsNoteB = svg.querySelectorAll(".noteB");
  const elementsLog = svg.querySelectorAll(".log");

  elementsNoteA.forEach((element) => {
    element.style.animation = "sec_A ease-in 5s 1";
  });

  elementsNoteB.forEach((element) => {
    element.style.animation = "sec_B ease-in 5s 1";
  });

  elementsLog.forEach((element) => {
    element.style.animation = "logType ease-in 2s 1 forwards";
  });
}
