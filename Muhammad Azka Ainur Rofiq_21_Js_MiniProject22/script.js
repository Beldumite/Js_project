let OutputTable = document.querySelector("#OutputTable");

function updateTable() {
  OutputTable.innerHTML = "";
  addTitle();

  let inputTextArea = document.querySelector("#InputArea").value;
  let routes = inputTextArea.split(",");
  routes.forEach((route) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let newRoute = route.replace(" ", " - ");
    td.textContent = newRoute;
    tr.appendChild(td);
    // route.forEach((city) => {});
    OutputTable.appendChild(tr);
  });
}

function addTitle() {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = "Trayek";
  td.colSpan = 2;
  tr.appendChild(td);
  OutputTable.appendChild(tr);
}
