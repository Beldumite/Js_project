let num = 1;

function updateTable() {
  const question = document.querySelector("#question").value;
  const options = document.querySelector("#options").value.split(",");
  const time = document.querySelector("#time").value;

  if (isEmpty(question, options, time)) {
    return;
  }

  const table = document.querySelector("#outputTable tbody");
  const newRow = table.insertRow();

  let optionsHTML = "";
  for (let index = 0; index < options.length; index++) {
    let optionText = options[index].trim();
    let optionHTML = `<td><label><input type="radio" name="question${num}" /> ${String.fromCharCode(
      65 + index
    )}. ${optionText}</label></td>`;
    optionsHTML += optionHTML;
  }

  newRow.innerHTML = `
    <tr>
        <td rowspan="2">${num}</td>
        <td colspan="3">${question}</td>
        <td rowspan="2">${time} menit</td>
    </tr>
    <tr>
        <td>${optionsHTML}</td>
    </tr>

  
  `;

  num++;
  resetFields();
}

function isEmpty(question, options, time) {
  if (question === "" || options.length === 0 || time === "") {
    alert("Tolong isi datanya");
    return true;
  } else {
    return false;
  }
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
}

function resetFields() {
  document.querySelector("#question").value = "";
  document.querySelector("#options").value = "";
  document.querySelector("#time").value = "";
}
