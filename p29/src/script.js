let num = 1;
let Fruits = [];
let editingRow = -1;
let currentPage = 1;
let rowsPerPage = 5;
document.querySelector("#prevButton").disabled = currentPage === 1;
document.querySelector("#nextButton").disabled = end >= Fruits.length;

function updateTable() {
  const outputTable = document.querySelector("#outputTable");
  outputTable.innerHTML = "";
  num = 1;
  let start = (currentPage - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  let pageData = Fruits.slice(start, end);

  pageData.map((fruit, index) => {
    const newRow = outputTable.insertRow();
    const realIndex = start + index;
    if (editingRow === realIndex) {
      newRow.innerHTML = `
    <tr>
      <td>${num}</td>
      <td><input type="text" id="newFruit" value="${fruit[0]}"></td>
      <td><input type="number" id="newWeight" value="${fruit[1]}"></td>
      <td><input type="url" id="newImage" value="${fruit[2]}"></td>
      <td id="action">
      <button class="red" onclick="deleteRow(${realIndex})">Hapus</button>
      <button onclick="saveRow(${realIndex})">Save</button></td>
    </tr>`;
    } else {
      newRow.innerHTML = `
    <tr>
      <td>${num}</td>
      <td>${fruit[0]}</td>
      <td>${fruit[1]} Kg</td>
      <td><img src="${fruit[2]}" alt="Image of ${fruit[0]}"></td>
      <td id="action">
      <button class="red" onclick="deleteRow(${realIndex})">Hapus</button>
      <button onclick="editRow(${realIndex})">Edit</button>
  </tr>
    `;
    }
    num++;
  });

  document.querySelector(
    "#pageInfo"
  ).textContent = `Page ${currentPage} of ${Math.ceil(
    Fruits.length / rowsPerPage
  )} Page`;

  // let pageInfo = (document.querySelector("#pageInfo") = () => {
  //   for (let i = 1; i < Math.ceil(Fruits.length / rowsPerPage); i++) {
  //     const button = document.createElement("button");
  //     button.innerText = i;
  //     button.onclick = () => {
  //       currentPage = i;
  //       updateTable();
  //     };
  //     pageInfo.appendChild(button);
  //   }
  // });

  // document.querySelector("#pageInfo").innerHTML = Array.from(
  //   { length: Math.ceil(Fruits.length / rowsPerPage) },
  //   (_, i) =>
  //     `<button onclick="currentPage=${i + 1};updateTable()">${i + 1}</button>`
  // ).join("");

  document.querySelector("#prevButton").disabled = currentPage === 1;
  document.querySelector("#nextButton").disabled = end >= Fruits.length;

  console.log(Fruits);
  document.querySelector("#name").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#image").value = "";
}

function updateArray() {
  const fruitName = document.querySelector("#name").value;
  const weight = document.querySelector("#weight").value;
  const image = document.querySelector("#image").value;
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

function nextPage() {
  if (currentPage * rowsPerPage < Fruits.length) {
    currentPage++;
    updateTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
  }
}
