let num = 1;
let Fruits = [];
let editingRow = -1;

function updateTable() {
  const outputTable = document.querySelector("#outputTable");
  outputTable.innerHTML = "";
  num = 1;

  Fruits.map((fruit, index) => {
    const newRow = outputTable.insertRow();
    if (editingRow === index) {
      newRow.innerHTML = `
    <tr>
      <td>${num}</td>
      <td><input type="text" id="newFruit" value="${fruit[0]}"></td>
      <td><input type="number" id="newWeight" value="${fruit[1]}"></td>
      <td><input type="url" id="newImage" value="${fruit[2]}"></td>
      <td id="action">
      <button class="red" onclick="deleteRow(${num - 1})">Hapus</button>
      <button onclick="saveRow(${num - 1})">Save</button></td>
    </tr>`;
    } else {
      newRow.innerHTML = `
    <tr>
      <td>${num}</td>
      <td>${fruit[0]}</td>
      <td>${fruit[1]} Kg</td>
      <td><img src="${fruit[2]}" alt="Image of ${fruit[0]}"></td>
      <td id="action">
      <button class="red" onclick="deleteRow(${num - 1})">Hapus</button>
      <button onclick="editRow(${num - 1})">Edit</button>
  </tr>
    `;
    }
    num++;
  });

  console.log(Fruits);
  document.querySelector("#name").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#image").value = "";
}

function updateArray() {
  const fruitName = document.querySelector("#name").value;
  const weight = document.querySelector("#weight").value;
  const image = document.querySelector("#image").value;
  const outputTable = document.querySelector("#outputTable");
  let fruit = [fruitName, weight, image];

  if (!fruitName || !weight || !image) {
    alert("Lengkapi datanya");
    return;
  }

  Fruits.push(fruit);
  updateTable();
}

function deleteRow(index) {
  Fruits.splice(index, 1);
  editingRow = -1;
  updateTable();
}

function editRow(index) {
  editingRow = index;
  updateTable();
}

function saveRow(index) {
  const newFruit = document.querySelector("#newFruit").value;
  const newWeight = document.querySelector("#newWeight").value;
  const newImage = document.querySelector("#newImage").value;

  if (!newFruit || !newWeight || !newImage) {
    alert("Jangan ada data yang kosong");
    return;
  }

  Fruits[index] = [newFruit, newWeight, newImage];
  editingRow = -1;
  updateTable();
}
