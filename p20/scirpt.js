const list = document.querySelector("ul");
const textColorRadio = document.querySelectorAll('[name="textColor"]');
const hoverColorRadio = document.querySelectorAll('[name="hoverColor"]');
let lastColor = "black";
let currentHoverColor = null;

function updateStatus() {
  list.innerHTML = "";
  const contentInput = document.querySelector("#content");
  const numInput = document.querySelector("#num");

  for (let i = 0; i < numInput.value; i++) {
    const listChild = document.createElement("li");
    listChild.textContent = contentInput.value + (i + 1);
    list.appendChild(listChild);
  }

  if (lastColor) changeColor(lastColor);
  if (currentHoverColor) setupHoverEffects();
}

function changeColor(color) {
  const listItems = document.querySelectorAll("ul li");
  listItems.forEach((li) => {
    li.style.color = color;
  });
}

function setupHoverEffects() {
  const listItems = document.querySelectorAll("ul li");
  listItems.forEach((li) => {
    li.removeEventListener("mouseover", li.hoverInHandler);
    li.removeEventListener("mouseout", li.hoverOutHandler);

    li.hoverInHandler = () => {
      li.style.color = currentHoverColor;
    };

    li.hoverOutHandler = () => {
      li.style.color = lastColor;
    };

    li.addEventListener("mouseover", li.hoverInHandler);
    li.addEventListener("mouseout", li.hoverOutHandler);
  });
}

textColorRadio.forEach((radioColor) => {
  radioColor.addEventListener("change", () => {
    lastColor = radioColor.value;
    changeColor(lastColor);
  });
});

hoverColorRadio.forEach((hoverColor) => {
  hoverColor.addEventListener("change", () => {
    currentHoverColor = hoverColor.value;
    setupHoverEffects();
  });
});
