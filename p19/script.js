const items = document.querySelectorAll(".list li");
let even = document.querySelector("#even");
let odd = document.querySelector("#odd");

function ChangeEven() {
  let i = 1;
  while (i < items.length) {
    items[i].style.color = even.value;
    i += 2;
    console.log(i);
    console.log(even);
  }
}

function ChangeOdd() {
  let i = 0;
  while (i < items.length) {
    items[i].style.color = odd.value;
    i += 2;
    console.log(i);
    console.log(odd);
  }
}
