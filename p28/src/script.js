let num = 1;
let mainArray = [];

function updateTable() {
  const fruitName = document.querySelector("#name").value;
  const weight = document.querySelector("#weight").value;
  const image = document.querySelector("#image").value;
  const outputTable = document.querySelector("#outputTable");
  let Arr = [fruitName, weight, image];
  console.log(Arr);

  const newRow = outputTable.insertRow();
  newRow.innerHTML = `
  <tr>
      <td>${num}</td>
      <td>${fruitName}</td>
      <td>${weight}</td>
      <td><img src="${image}" alt="Image of ${fruitName}"></td>
      <td id="action"><button class="red">Hapus</button><button>Edit</button><button class="hidden">Save</button></td>
  </tr>
  `;
  mainArray.push(Arr);
  console.log(mainArray);

  num++;
  document.querySelector("#name").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#image").value = "";
}
