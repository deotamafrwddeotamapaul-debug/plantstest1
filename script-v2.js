const stem = document.querySelector(".stem");
const msg = document.getElementById("msg");

console.log("NEW SCRIPT LOADED");

let size = 30;

setInterval(() => {
  size += 10;
  stem.style.height = size + "px";
  stem.style.background = "red";
  msg.textContent = "Growing... " + size;
}, 1000);
