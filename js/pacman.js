// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;

var imgWidth = 20;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around.
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  [
    "https://adored-manta-aoau-8080.nt.run/images/PacMan1.png",
    "https://adored-manta-aoau-8080.nt.run/images/PacMan2.png",
  ],
  [
    "https://adored-manta-aoau-8080.nt.run/images/PacMan3.png",
    "https://adored-manta-aoau-8080.nt.run/images/PacMan4.png",
  ],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById("PacMan");
  let pactop = document.getElementById("pacman-top");
  let pacbot = document.getElementById("pacman-bottom");

  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, pos);

  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";

    if (focus) {
      pactop.style.transform = "rotate(20deg)";
      pacbot.style.transform = "rotate(-20deg)";
    } else {
      pactop.style.transform = "rotate(1deg)";
      pacbot.style.transform = "rotate(-1deg)";
    }
  } else {
    pos += 20;
    img.style.left = pos + "px";

    if (focus) {
      pactop.style.transform = "rotate(-20deg)";
      pacbot.style.transform = "rotate(20deg)";
    } else {
      pactop.style.transform = "rotate(-1deg)";
      pacbot.style.transform = "rotate(1deg)";
    }
  }
}
setInterval(Run, 200);

function checkPageBounds(direction, pos) {
  if (direction == 0 && pos >= pageWidth - imgWidth) {
    direction = 1;
  } else if (direction == 1 && pos < 0) {
    direction = 0;
  }

  return direction;
}
