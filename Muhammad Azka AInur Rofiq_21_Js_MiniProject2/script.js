function blue_even() {
  const items = document.querySelectorAll("#list li");

  items.forEach((listitem, index) => {
    if ((index + 1) % 2 === 0) {
      listitem.classList.toggle("even");
    }
  });
}
