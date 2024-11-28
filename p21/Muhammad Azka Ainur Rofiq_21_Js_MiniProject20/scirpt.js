const list = document.querySelector("ul");

const textColorRadio = document.querySelectorAll('[name = "textColor"]');
const hoverColorRadio = document.querySelectorAll('[name = "hoverColor"]');
let lastColor = "black";

function updateStatus() {
  list.innerHTML = "";
  const ContentInput = document.querySelector("#content");
  const NumInput = document.querySelector("#num");

  for (let i = 0; i < NumInput.value; i++) {
    const ListChild = document.createElement("li");
    ListChild.textContent = ContentInput.value + (i + 1);
    list.appendChild(ListChild);
  }
}

// warna text

function changeColor(color) {
  const listItem = document.querySelectorAll("ul li");
  listItem.forEach((li) => {
    li.style.color = color;
  });
}

textColorRadio.forEach((radioColor) => {
  radioColor.addEventListener("change", () => {
    changeColor(radioColor.value);
    lastColor = radioColor.value;
  });
});

// warna hover

function changeHover(color) {
  const listItem = document.querySelectorAll("ul li");
  listItem.forEach((li) => {
    li.addEventListener("mouseover", () => {
      li.style.color = color;
    });
    li.addEventListener("mouseout", () => {
      li.style.color = lastColor;
    });
  });
}

hoverColorRadio.forEach((hoverColor) => {
  hoverColor.addEventListener("change", () => {
    changeHover(hoverColor.value);
  });
});
