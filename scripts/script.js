const circle = document.querySelector('.following');
let x = 0,
  y = 0;
let targetX = 0,
  targetY = 0;
const speed = 0.05;
window.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;
});

const mouseMoveLoop = () => {
  targetX += (x-targetX)*speed;
  targetY += (y-targetY)*speed;

  circle.style.top = targetY + "px";
  circle.style.left = targetX + "px";
  window.requestAnimationFrame(mouseMoveLoop);
}
mouseMoveLoop();

const dark = document.querySelector('.toggle');
let onOff = false;

const darkToggleHandler = () => {
  onOff = !onOff;
  if (onOff) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
}

dark.addEventListener('click', darkToggleHandler);