function time() {
  const current = new Date();
  let jam = current.getHours();
  let menit = current.getMinutes();
  let detik = current.getSeconds();
  menit = checkzero(menit);
  detik = checktype(detik);
  detik = checkzero(detik);

  console.log(detik);

  document.querySelector("#clock").innerHTML = jam + ":" + menit + ":" + detik;
  setTimeout(time, 1000);
}

function checkzero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checktype(i) {
  if (i % 2 === 0) {
    document.querySelector("#clock").classList.add("blueBorder");
    document.querySelector("#clock").classList.remove("redBorder");
  } else {
    document.querySelector("#clock").classList.add("redBorder");
    document.querySelector("#clock").classList.remove("blueBorder");
  }
  return i;
}
