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

/* video */
const video = document.querySelector("video");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nav = document.querySelector("nav");
const display = document.getElementById("displayTime");
let timeProgression;

const navChange = () => {
  nav.classList.toggle("fondoNav", window.scrollY > window.innerHeight * 0.35);
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

setTimeout(() => {
  display.textContent = "Duración video 04:41";
}, 100);

playButton.addEventListener("click", () => {
  video.play();
  timeProgression = setInterval(() => {
    display.textContent = formatTime(video.currentTime);
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  video.pause();
  clearInterval(timeProgression);
});

const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const setTheme = (theme) => {
  const body = document.querySelector("body");
  body.className = theme;
};

/* Puzzle */
let flag = false;
let contador = 0;

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
  e.dataTransfer.setData("text", e.target.id);
}

async function released(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text");
  const imagen = document.getElementById(id);
  if (imagen) {
    imagen.style.display = "none";
    e.target.innerHTML = `<img src="${imagen.src}" height="400px" width="275px">`;
    contador++;
  }
}

function reboot() {
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", start);
