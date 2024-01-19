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
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  if (targetX - x > 10) {
    circle.style.transform = "scaleX(-1)";
  }
  if (targetX - x < -10) {
    circle.style.transform = "scaleX(1)";
  }
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
    document.querySelector('.dicon').src = "assets/blackSun.svg";
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
    document.querySelector('.dicon').src = "assets/whiteMoon.svg";
  }
}

dark.addEventListener('click', darkToggleHandler);

const text = "안녕하세요.\n프론트엔드 개발자를 꿈꾸는 송미숙입니다.";
const tspan = document.querySelector('.typed');
let i = 0;

const typing = () => {
  const t = text[i++];
  if (i <= text.length) {
    tspan.innerHTML += t === "\n" ? "<br/>" : t;
  }
  if (i > text.length + 10) {
    tspan.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200)