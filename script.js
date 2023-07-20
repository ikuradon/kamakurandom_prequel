const KMKR_COLORS = [
  "#fedc45",
  "#000000",
  "#282828",
  "#e4e4e4",
  "#f6f6f6",
  "#ffffff",
];

const changeColors = function () {
  const classList = [
    document.getElementById("logo").getElementsByClassName("ka"),
    document.getElementById("logo").getElementsByClassName("ma"),
    document.getElementById("logo").getElementsByClassName("ku"),
    document.getElementById("logo").getElementsByClassName("ra"),
    document.getElementById("logo").getElementsByClassName("nd"),
    document.getElementById("logo").getElementsByClassName("om"),
  ];
  for (let i = 0; i < classList.length; i++) {
    const color = KMKR_COLORS[Math.floor(Math.random() * KMKR_COLORS.length)];
    for (const element of classList[i]) {
      element.style.fill = color;
    }
  }
};

window.setInterval(changeColors, 1000);