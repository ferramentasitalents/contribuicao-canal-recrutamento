function calculateContribution() {
  const numAplicantesCanal = parseFloat(document.getElementById("num-aplicantes-canal").value);
  const numAplicantesTotal = parseFloat(document.getElementById("num-aplicantes-total").value);
  const contribution = (numAplicantesCanal / numAplicantesTotal) * 100;
  document.getElementById("result").innerHTML = `Contribuição do Canal de Recrutamento: ${contribution.toFixed(2)}%`;
}

