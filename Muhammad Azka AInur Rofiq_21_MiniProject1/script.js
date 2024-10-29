document.getElementById("f").addEventListener("input", function () {
  calc(this);
});

function calc(i) {
  var celcius = ((i.value - 32) * 5) / 9;
  document.getElementById("result").innerHTML = celcius + "&deg" + "C";
}
