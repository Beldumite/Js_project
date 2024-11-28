let num = 1;

function updateTable() {
  const namaBuah = document.querySelector("#buah").value;
  const beratBuah = document.querySelector("#berat").value;
  const gambar = document.querySelector("#gambar").value;

  // if (isEmpty(namaBuah, beratBuah, gambar)) {
  //   return;
  // }

  const table = document.querySelector("#outputTable tbody");
  const newRow = table.insertRow();
  newRow.innerHTML = `
  <tr>
  <td><span id="numCol">${num}</span></td>
  <td><span>${namaBuah}</span></td>
  <td><span>${beratBuah} Kg</span></td>
  <td><span><img src="${gambar}" alt="${namaBuah}"></span></td>
  <td>
  <button onclick="deleteRow(this)">Hapus</button>
  <button onclick="editRow(this)">Edit</button>
  <button onclick="saveRow(this)" style="display: none;">Save</button>
  </td>
  </tr>
`;

  const beratBuahSpan = newRow.cells[2];
  if (parseFloat(beratBuah) > 5) {
    beratBuahSpan.classList.add("red");
  }
  num++;
  // updateTableNumber();
}

function isEmpty(namaBuah, beratBuah, gambar) {
  if (namaBuah === "" || beratBuah === "" || gambar === "") {
    alert("Tolong isi datanya");
    return true;
  } else {
    return false;
  }
}

function deleteRow(button) {
  row = button.closest("tr");
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

function editRow(button) {
  const span = button.closest("tr").querySelectorAll("td span:not(#numCol)");
  for (let i = 0; i < span.length; i++) {
    const input = document.createElement("input");
    if (span[i].hasChildNodes() && span[i].children.length !== 0) {
      input.type = "url";
      input.value = span[i].children[0].src;
    } else if (span[i].textContent.includes("Kg")) {
      input.type = "number";
      input.value = span[i].textContent;
    } else {
      input.type = "text";
      input.value = span[i].textContent;
    }
    span[i].replaceWith(input);
    button.style.display = "none";
    button.nextElementSibling.style.display = "inline-block";
  }
}

function saveRow(button) {
  const input = button.closest("tr").querySelectorAll("td input");
  for (let i = 0; i < input.length; i++) {
    const span = document.createElement("span");
    if (input[i].type === "url") {
      span.innerHTML = `<img src="${input[i].value}">`;
      console.log(span);
    } else if (input[i].type === "number") {
      span.textContent = `${input[i].value} Kg`;
    } else {
      span.textContent = input[i].value;
    }
    input[i].replaceWith(span);
  }

  button.style.display = "none";
  button.previousElementSibling.style.display = "inline-block";
}
