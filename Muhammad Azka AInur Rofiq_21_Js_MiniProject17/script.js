const listItem = document.querySelectorAll("#list li");
const textColorRadio = document.querySelectorAll('[name="warna"]');
const hoverColorRadio = document.querySelectorAll('[name="hover"]');

let lastColor = "black";

// warna teks

function changeColor(color) {
  listItem.forEach((li) => {
    li.style.color = color;
  });
}

textColorRadio.forEach((cRadio) => {
  cRadio.addEventListener("change", () => {
    changeColor(cRadio.value);
    lastColor = cRadio.value;
  });
});

// warna hover

function changeHover(color) {
  listItem.forEach((li) => {
    li.addEventListener("mouseover", () => {
      li.style.color = color;
    });
    li.addEventListener("mouseout", () => {
      li.style.color = lastColor;
    });
  });
}

hoverColorRadio.forEach((hRadio) => {
  hRadio.addEventListener("change", () => {
    changeHover(hRadio.value);
  });
});
