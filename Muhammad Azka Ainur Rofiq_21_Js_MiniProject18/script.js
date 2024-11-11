function ChangeEvenNumToBlue() {
  const num = document.querySelectorAll(".list li");
  for (let i = 0; i < num.length; i++) {
    if ((i + 1) % 2 === 0) {
      num[i].classList.toggle("even");
    }
  }
}
