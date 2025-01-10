function find() {
  const outputTable = document.querySelector("#outputTable");
  const numbers = document.querySelector("#numbers").value;
  const Arr = numbers.split(",").map((n) => {
    return parseInt(n.trim());
  });
  let minVal = "";
  let maxVal = "";
  let Avg = "";
  outputTable.innerHTML = "";

  if (!numbers) return alert("Lengkapi Datanya");

  Arr.sort((a, b) => a - b);
  minVal = Arr[0];

  Arr.sort((a, b) => b - a);
  maxVal = Arr[0];

  Avg = Arr.reduce((t, v) => t + v) / Arr.length;

  console.log(minVal, maxVal, Avg);

  const th = outputTable.insertRow();
  th.innerHTML = `
    <tr>
        <th>Min</th>
        <th>Max</th>
        <th>Avg</th>
    </tr>`;

  const newRow = outputTable.insertRow();
  newRow.innerHTML = `
    <tr>
        <td>${minVal}</td>
        <td>${maxVal}</td>
        <td>${Avg}</td>
    </tr>`;
}
