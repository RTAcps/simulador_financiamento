function simular() {
  var valor = parseFloat(document.getElementById("valor").value);
  var prazoAnos = parseFloat(document.getElementById("prazoAnos").value);
  var jurosAa = parseFloat(document.getElementById("jurosAa").value);
  var prazoMeses = prazoAnos * 12;

  var jurosAm = Math.pow(1 + jurosAa, 1 / 12) - 1;
  var amortizacao = valor / prazoMeses;

  document.getElementById("prazoMeses").valueAsNumber = prazoMeses;
  document.getElementById("jurosAm").valueAsNumber = jurosAm;

  var jurosTotal = 0;
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  for (var i = 0; i < prazoMeses; i++) {
    var saldoDevedor = valor - i * amortizacao;
    var jurosPrestacao = saldoDevedor * jurosAm;
    jurosTotal += jurosPrestacao;
    var totalPrestacao = jurosPrestacao + amortizacao;

    var tr = document.createElement("tr");
    var td0 = criaTd(i + 1);
    var td1 = criaTd(amortizacao.toFixed(2));
    var td2 = criaTd(jurosPrestacao.toFixed(2));
    var td3 = criaTd(totalPrestacao.toFixed(2));
    tr.append(td0, td1, td2, td3);
    tbody.append(tr);
  }

  document.getElementById("jurosTotal").valueAsNumber = jurosTotal.toFixed(2);
}

function criaTd(texto) {
  var td = document.createElement("td");
  td.textContent = texto;
  return td;
}

var fsList = document.querySelectorAll(".botao");
for (var i = 0; i < fsList.length; i++) {
  botao(fsList[i]);
}
function botao(btn) {
  var addButton = document.createElement("button");
  addButton.textContent = "Simular";
  addButton.type = "button";

  btn.appendChild(addButton);

  addButton.addEventListener("click", function () {
    simular();
  });
}
