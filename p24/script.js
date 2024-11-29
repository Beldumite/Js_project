let num = 1;

function updateTable() {
  const question = document.querySelector("#question").value;
  const options = document.querySelector("#options").value.split(",");
  const time = document.querySelector("#time").value;

  // if (isEmpty(question, options, time)) {
  //   return;
  // }

  const thead = document.querySelectorAll("#outputTable thead tr th");
  const table = document.querySelector("#outputTable tbody");
  const newRow = table.insertRow();
  const newRow2 = table.insertRow();

  let optionsHTML = "";
  for (let index = 0; index < options.length; index++) {
    let optionText = options[index].trim();
    let optionHTML = `<label><input type="radio" name="question${num}" /> ${String.fromCharCode(
      65 + index
    )}. ${optionText}</label><br>`;
    optionsHTML += optionHTML;
  }

  // thead
  thead[1].colSpan = "3";
  // tbody

  const numCell = newRow.insertCell(0);
  numCell.rowSpan = "2";
  console.log(numCell.rowspan);

  numCell.textContent = num;

  const questionCell = newRow.insertCell(1);
  questionCell.colSpan = 3;
  questionCell.textContent = question;

  const timerCells = newRow.insertCell(2);
  timerCells.rowSpan = "2";
  startTimer(time, timerCells);

  newRow2.innerHTML = `
  <tr><td colspan="3" style="text-align:left;">${optionsHTML}</td>
  </tr>
  
  `;

  num++;
  document.querySelector("#question").value = "";
  document.querySelector("#options").value = "";
  document.querySelector("#time").value = "";
}

function isEmpty(question, options, time) {
  if (question === "" || options.length === 0 || time === "") {
    alert("Tolong isi datanya");
    return true;
  } else {
    return false;
  }
}

function startTimer(duration, cell) {
  let remainingTime = duration * 60;
  const interval = setInterval(() => {
    const min = parseInt(remainingTime / 60, 10);
    const sec = parseInt(remainingTime % 60, 10);
    cell.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;

    if (remainingTime < 0) {
      clearInterval(interval);
      cell.textContent = "Waktu Habis!!";
    } else {
      remainingTime--;
    }
  }, 1000);
}
