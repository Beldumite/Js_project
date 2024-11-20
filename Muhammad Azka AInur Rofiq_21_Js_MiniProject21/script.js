let num = 0;

function updateTable() {
  const namaBuah = document.querySelector("#fruit").value;
  const beratBuah = document.querySelector("#weight").value;

  if (namaBuah === "" || beratBuah === "") {
    alert("Tolong isi datanya");
    return;
  }

  num++;

  const table = document.querySelector("#outputTable tbody");
  const newRow = table.insertRow();

  const cellNo = newRow.insertCell(0);
  cellNo.textContent = num;

  const cellName = newRow.insertCell(1);
  cellName.textContent = namaBuah;

  const cellWeight = newRow.insertCell(2);
  cellWeight.textContent = beratBuah + "kg";
  if (beratBuah > 5) {
    cellWeight.classList.add("red");
  }

  const cellAction = newRow.insertCell(3);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.onclick = function () {
    deleteRow(newRow);
  };
  cellAction.appendChild(deleteButton);

  document.querySelector("#fruit").value = "";
  document.querySelector("#weight").value = "";
}

function deleteRow(row) {
  row.remove();
  updateTableNumber();
}

function updateTableNumber() {
  const rows = document.querySelector("#outputTable tbody").rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i + 1].cells[0].textContent = i + 1;
  }
  num = rows.length;
}
