const colorThemes = {
  default: ["FFCDD2", "EF9A9A", "E57373"],
};

const propMap = [
  "--primary-color",
  "--primary-color-text",
  "--primary-color-active",
];

function setColorTheme(themeName) {
  const root = document.querySelector(':root');
  propMap.forEach((x, i) =>
    root.style.setProperty(x, "#" + colorThemes[themeName][i])
  );
}

export { setColorTheme, setColorTheme as default };
