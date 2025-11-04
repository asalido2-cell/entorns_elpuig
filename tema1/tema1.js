// 💻 Animació tipus "Matrix" al fons del Tema 1
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "01";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--bg");
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent");
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// 🧠 Easter egg geeky
console.log("%cTema 1 carregat correctament!", "color: #2563eb; font-weight: bold;");
console.log("🚀 Keep calm and code on — DAW/DAM edition 💾");
