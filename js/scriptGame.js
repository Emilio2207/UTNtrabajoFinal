/* scroll */
console.log("El script se está ejecutando");

let flag = false;
let counter = 0;

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

/* Puzzle */
function start() {
  const images = document.querySelectorAll("#box-img img");
  const dropZones = [
    document.getElementById("releaseOne"),
    document.getElementById("releaseTwo"),
    document.getElementById("releaseThree"),
  ];

  images.forEach((image) => {
    image.addEventListener("dragstart", dragged, false);
  });

  dropZones.forEach((zone) => {
    zone.addEventListener("dragenter", (e) => e.preventDefault(), false);
    zone.addEventListener("dragover", (e) => e.preventDefault(), false);
    zone.addEventListener("drop", released, false);
  });
}

function dragged(e) {
  console.log("Dragged:", e.target.id);
  e.dataTransfer.setData("text", e.target.id);
}

async function released(e) {
  e.preventDefault();
  console.log("Released:", e.target);
  const id = e.dataTransfer.getData("text");
  const imagen = document.getElementById(id);
  if (imagen) {
    console.log("Imagen encontrada:", id);
    imagen.style.display = "none";
    e.target.innerHTML = `<img src="${imagen.src}" height="400px" width="275px">`;
    counter++;
  } else {
    console.log("Imagen no encontrada:", id);
  }
}

function reboot() {
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", start);
