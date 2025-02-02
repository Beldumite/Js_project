function updateTable() {
  const firstNum = parseInt(document.querySelector("#firstNumber").value);
  const lastNum = parseInt(document.querySelector("#lastNumber").value);
  let outputTable = document.querySelector("#outputTable");
  let Arr = [];
  outputTable.innerHTML = "";

  if (!firstNum || !lastNum) {
    alert("Lengkapi angkanya!");
    return;
  } else if (firstNum > lastNum) {
    alert("Perbandingan gak valid, angka awal harus kurang dari angka akhir");
    return;
  }

  for (i = firstNum; i <= lastNum; i++) {
    Arr.push(i);
  }

  // const primeArr = Arr.map(checkIsPrime);

  // primeArr.forEach((n, index) => {
  //   if (n === undefined) {
  //     Arr[index].remove;
  //   } else {
  //     console.log(n);
  //   }
  // });

  const primeArr = Arr.filter(checkIsPrime);

  const th = outputTable.insertRow();
  th.innerHTML = `
    <thead>
        <td>Bilangan prima antara ${firstNum} dan ${lastNum}</td>
    </thead>`;

  primeArr.forEach((i) => {
    const newRow = outputTable.insertRow();
    newRow.innerHTML = `   
      <tr>
        <td>${i}</td>
      </tr>
      `;
  });
}

function checkIsPrime(n) {
  for (i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      return;
    }
  }
  return n;
}
