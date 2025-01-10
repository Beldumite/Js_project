function sortNum() {
  const numbers = document.querySelector("#numbers").value;
  const order = document.querySelector('input[name="sort"]:checked');
  const outputTable = document.querySelector("#outputTable");
  let Arr = numbers.split(",");
  outputTable.innerHTML = "";

  if (!numbers) {
    alert("Lengkapi Datanya!!!");
    return;
  } else if (!order) {
    alert("Pilih salah satu dari opsi sort");
    return;
  }

  if (order.value === "asc") {
    Arr.sort((a, b) => a - b);
  } else Arr.sort((a, b) => b - a);

  const th = outputTable.insertRow();
  th.innerHTML = `
    <tr>
        <th>Angka</th>
    </tr>`;

  Arr.forEach((i) => {
    const newRow = outputTable.insertRow();
    newRow.innerHTML = `
    <tr>
        <td>${i}</td>
    </tr>`;
  });
}
