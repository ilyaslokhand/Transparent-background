let ImageBox = document.querySelector(".img-box");
let ChangeImage = document.querySelector(".change-img");
let originalImg = document.getElementById("originalImg");

let line = document.getElementById("line");

// Make sure the originalImg is as wide as the big box (ImageBox).
originalImg.style.width = ImageBox.offsetWidth + "px";

let LeftSpace = ImageBox.offsetLeft;
// LeftSpace: How far the left edge of the box (ImageBox) is from the left side of the screen.

function Change(e) {
  // e.pageX - LeftSpace: Finds where your mouse is inside the box.

  let boxwidth = e.pageX - LeftSpace + "px"; // e.pageX: Finds where your mouse is on the screen.

  ChangeImage.style.width = boxwidth; //Changes the width of ChangeImage to match your mouse position.
  line.style.left = boxwidth; //Moves the line to match your mouse position.
}
